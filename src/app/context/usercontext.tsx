// // context/UserContext.tsx
// "use client"
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface UserContextType {
//   currentUser: string;
//   setCurrentUser: (name: string) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState<string>("");

//   return (
//     <UserContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };

// context/UserContext.js
// context/UserContext.tsx
"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSession } from 'next-auth/react';

// Define the type for the user context
interface UserContextType {
  user: any; // You can replace 'any' with a more specific type if you have one
}

// Create the context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>(null); // Replace 'any' with a specific user type if available

  useEffect(() => {
    if (status === 'authenticated') {
      setUser(session?.user || null);
    } else {
      setUser(null);
    }
  }, [session, status]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
