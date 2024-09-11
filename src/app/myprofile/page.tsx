import Footers from "@/components/footer";
import Headers from "@/components/header";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { useUser } from "@/app/context/usercontext";

export default async function Userprofile(){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
  const { user } = useUser();
  const current_username = user?.name

    return (
        <>
        <Headers />
        <div className="container">
            <Userprofile />
            <p>hey {current_username}! ,I need to write a logic to show your name</p>
        </div>
        <Footers />
        </>
    )
}