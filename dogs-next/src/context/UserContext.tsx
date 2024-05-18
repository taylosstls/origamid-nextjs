'use client';

import logoutAccount from '@/actions/logoutAccount';
import validateToken from '@/actions/validateToken';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();

      if (!ok) await logoutAccount();
    }

    // Só rodará a validação do Token caso o usuário esteja logado na aplicação
    if (userState) validate()
  }, [userState])

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
