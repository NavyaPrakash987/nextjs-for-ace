"use client"
import Footers from "@/components/footer";
import Headers from "@/components/header";
import Component from "@/components/feed";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import SidePanel from "@/components/panel";
import Feed from "@/components/feed";
import { useState } from "react";
import CreatePostModal from "@/components/createposts";

export default async function home_page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect('/api/auth/signin'); // Redirect if not authenticated
    }
    return (
        <div>
            <Headers />
            <Feed   />
                {/* // openModal={() => setIsModalOpen(true)} // Pass function to open modal */}
          
            <Footers />
            {/* <CreatePostModal 
                isOpen={isModalOpen} 
                onRequestClose={() => setIsModalOpen(false)} 
            /> */}
        </div>
)
}