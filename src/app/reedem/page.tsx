// "use client"
// import RedeemComponent from "@/components/coupon_grid"
// import Footers from "@/components/footer"
// import Headers from "@/components/header"
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import authOptions from "../api/auth/[...nextauth]/authOptions";

// export default async function Reedem_page() {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       redirect('/api/auth/signin'); // Redirect if not authenticated
//     }
//     return(
//         <main>
//             <Headers />
//             <RedeemComponent />
//             <Footers />
//         </main>
//     )    };