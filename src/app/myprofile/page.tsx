import Footers from "@/components/footer";
import Headers from "@/components/header";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function Userprofile(){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
    return (
        <>
        <Headers />
        <div className="container">
            <p>hey user! ,I need to write a logic to show your name</p>
        </div>
        <Footers />
        </>
    )
}