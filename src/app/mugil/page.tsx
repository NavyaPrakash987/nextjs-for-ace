"use client"
import UserProfile from "@/components/mugil";
import { useSession } from "next-auth/react";

export default function Trials (){

  return (
  <main>
    <UserProfile />
  </main>
  )
}