"use client"

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigate } from 'react-router-dom';

// import { useRouter } from 'next/navigation';
// import { redirect } from 'next/navigation';


// Components (Assuming these are defined elsewhere in your project)
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event: any) => { // Use a more specific type if needed
    event.preventDefault();
    


    setEmailError(""); 
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required!");
      return;
    }

    if (!password) {
      setPasswordError("Password is required!");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      // Handle error display (e.g., set a generic error message)
    } else {
      // redirect('/'); // Redirect if not authenticated
      // navigate('/', { replace: true });
      window.location.href = "/";

    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <header className="flex justify-between w-full p-4 border-b">
        <Image src="/npcilogo.png" alt="NPCI Logo" width={150} height={100} />
        <Image
          src="/togetherWebuild.jpg"
          alt="Together We Build Logo"
          width={150}
          height={100}
        />
      </header>
      <main className="flex flex-1 w-full max-w-6xl mx-auto mt-8">
        <div className="flex flex-col items-center flex-1 p-8">
          <Image src="/ace_logo.png" alt="ACE Logo" width={100} height={100} />
          <h1 className="mt-4 text-xl font-semibold text-center">
            Awards, Celebrations & Expressions
            <br />
            Rewards and Recognition Platform
          </h1>
          <form onSubmit={handleSubmit} className="w-full max-w-sm mt-8 space-y-4">
            <div>
              <Label htmlFor="email">Email ID</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="ml-2 text-sm">
                  I agree to{" "}
                  <Link href="/termsconditions" className="text-blue-600">
                    Terms & Conditions
                  </Link>
                </Label>
              </div>
              <Link href="/forgotpassword" className="text-sm text-blue-600">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" variant={"outline"} className="w-full bg-blue-600">
              LOGIN
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
