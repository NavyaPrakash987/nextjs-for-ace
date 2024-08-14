import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

interface CustomUser extends User {
  // id: string; // Ensure this is a string
  // name?: string | null;
  email?: string | null;
  password?: string | null; // Optional if you're not returning this
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (user && user.password === credentials?.password) {
          return {
          // id: user.id.toString(), // Convert id to string if it's a number
          // name: user.name,
          email: user.email,
        } as CustomUser;
        } 
        else {
          throw new Error("Invalid credentials");
        }
      }
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID as string,
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/auth/signin', // Custom login page
  },
};

export default NextAuth(authOptions);

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import AzureADProvider from "next-auth/providers/azure-ad";
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import prisma from "@prisma/client"; // Adjust the path as necessary
// import { NextAuthOptions } from "next-auth";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "you@example.com" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials?.email }
//         });

//         if (user && user.password === credentials?.password) {
//           return user;
//         } else {
//           throw new Error("Invalid credentials");
//         }
//       }
//     }),
//     AzureADProvider({
//       clientId: process.env.AZURE_AD_CLIENT_ID as string,
//       clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
//       tenantId: process.env.AZURE_AD_TENANT_ID as string,
//     })
//   ],
//   session: {
//     strategy: "jwt"
//   },
//   pages: {
//     signIn: '/auth/signin', // Custom login page
//   },
// };

// export default NextAuth(authOptions);

