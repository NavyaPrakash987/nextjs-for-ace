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