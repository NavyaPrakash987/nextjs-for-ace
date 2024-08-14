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






// "use client"

// import { signIn } from "next-auth/react";
// import React, { FormEvent } from "react";

// export default function SignIn() {
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     const form = event.currentTarget; // Get the current form element
//     const email = form.email.value;
//     const password = form.password.value;

//     const result = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     if (result?.error) {
//       console.error("Login failed:", result.error);
//     } else {
//       window.location.href = "/"; // Redirect to home page on success
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input type="text" name="email" placeholder="you@example.com"required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" required />
//       </div>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// }


// /**
// * This code was generated by v0 by Vercel.
// * @see https://v0.dev/t/wUlRxteAuUM
// * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
// */
// 'use client'

// import { useState } from "react"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [emailError, setEmailError] = useState("")
//   const [passwordError, setPasswordError] = useState("")
//   const router = useRouter()

//   const handleLogin = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     if (!email) setEmailError("Email is required!")
//     if (!password) setPasswordError("Password is required!")
//     if (email && password) {
//       await signIn("credentials", { email, password })
//       router.push('/home')
//     }
//   }
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-white">
//       <header className="flex justify-between w-full p-4 border-b">
//         <Image src="/npcilogo.png" alt="NPCI Logo" width={150} height={100} />
//         <Image src="/togetherWebuild.jpg" alt="Together We Build Logo" width={150} height={100} />
//       </header>
//       <main className="flex flex-1 w-full max-w-6xl mx-auto mt-8">
      
//         <div className="flex flex-col items-center flex-1 p-8">
//           <Image src="/ace_logo.png" alt="ACE Logo" width={100} height={100} />
//           <h1 className="mt-4 text-xl font-semibold text-center">
//             Awards, Celebrations & Expressions
//             <br />
//             Rewards and Recognition Platform
//           </h1>
//           <form onSubmit={handleLogin} className="w-full max-w-sm mt-8 space-y-4">
//             <div>
//               <Label htmlFor="email">Email ID</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email ID"
//               />
//               {emailError && <p className="text-red-500">{emailError}</p>}
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//               {passwordError && <p className="text-red-500">{passwordError}</p>}
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <Checkbox id="terms" />
//                 <Label htmlFor="terms" className="ml-2 text-sm">
//                   I agree to{" "}
//                   <Link href="/termsconditions" className="text-blue-600">
//                     Terms & Conditions
//                   </Link>
//                 </Label>
//               </div>
//               <Link href="/forgotpassword" className="text-sm text-blue-600">
//                 Forgot Password?
//               </Link>
//             </div>
//             <Button type="submit" variant={"outline"} className="w-full bg-blue-600">
//               LOGIN
//             </Button>
//           </form>
//         </div>
//       </main>
//     </div>
//   )
// }

// function signIn(arg0: string, arg1: { email: string; password: string }) {
//   return true
// }
