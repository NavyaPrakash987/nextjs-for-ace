"use client"
import Footers from "@/components/footer";
import Headers from "@/components/header";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function myawards(){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
    return (
        <main>
            <Headers />
            <div className="container">
                <p> Bravo you won so and so awards</p>
            </div>
            <Footers />
        </main>
    )
};
