
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import authOptions from './api/auth/[...nextauth]/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin'); // Redirect if not authenticated
  }
  else 
  redirect('/home')
}
