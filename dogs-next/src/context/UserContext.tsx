'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUserState: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do Provider');

  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
