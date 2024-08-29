import Footers from "@/components/footer";
import Headers from "@/components/header";
import Component from "@/components/homecomp";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import SidePanel from "@/components/panel";
import Feed from "@/components/homecomp";

export default async function home_page() {
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
    return (
        <div>
            <Headers />
            <Feed />
            <Footers />
        </div>
        
    
)}