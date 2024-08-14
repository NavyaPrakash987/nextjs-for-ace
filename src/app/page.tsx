"use client"

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'; // Adjust path ./api/auth/[...nextauth]/authOptions
import { HomeComp } from "@/components/home";
import Headers from "@/components/header";
import Footers from "@/components/footer";


export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin'); // Redirect if not authenticated
  }
  return (
    <main>
      <Headers />
      <HomeComp />
      <Footers />
    </main>
    
  );
}
