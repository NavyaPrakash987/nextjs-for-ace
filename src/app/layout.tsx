import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]/authOptions";
  // import { SessionProvider } from "next-auth/react";
  // import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACE RnR reward",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>        
                    <main>{children}</main>
              </body>
    </html>
  );
}
