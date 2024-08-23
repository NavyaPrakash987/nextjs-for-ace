"use client" // Ensure this is a client component

import { useSession } from 'next-auth/react';

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...<p>{session.user.email}</p></div>; // Show loading state while fetching session
  }

  if (!session) {
    return <div>Please sign in to view your profile.</div>; // Prompt user to sign in
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Email:</strong> {session.user.email}</p>
      <p><strong>Name:</strong> {session.user.name || "No name provided"}</p>
      <p><strong>User ID:</strong> {session.user.id}</p> {/* Assuming id is included in session.user */}
    </div>
  );
}