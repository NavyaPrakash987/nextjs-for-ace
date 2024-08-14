// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"; //./api/auth/[...nextauth]
// import { GetServerSideProps } from "next";
// import { Session } from "next-auth";


// interface ProtectedPageProps {
//   session: Session | null; // Session can be null if not authenticated
// }

// export default async function ProtectedPage({ session }: ProtectedPageProps) {
// "use server"
//   if (!session) {
//     return <p>You need to be authenticated to view this page.</p>;
//   }

//   return <p>Welcome, {session.user?.email}!</p>; // Use optional chaining for user
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
  
//   const session = await getServerSession(context.req, context.res, authOptions);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/signin', // Redirect to login if not authenticated
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
