// app/providers.tsx
'use client'; // This makes the component a client component

import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/app/context/usercontext';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </SessionProvider>
  );
}