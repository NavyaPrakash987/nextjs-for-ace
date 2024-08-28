"use client"
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) 
  {
    const session = await getServerSession(authOptions);
  
    return (
      <html lang="en">
        <body>  
          <SessionProvider session={session}>
             <main>{children}</main>
             </SessionProvider>
            </body>
      </html>
    );
  }
  