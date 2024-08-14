import Footers from "@/components/footer";
import Headers from "@/components/header";
import Component from "@/components/homecomp";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function home_page() {
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
    return (
        <div>
            <Headers />
            <Component />
            <Footers />
        </div>
        
    
)}