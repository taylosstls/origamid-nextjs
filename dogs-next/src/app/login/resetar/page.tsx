import { Metadata } from 'next';
import LoginFormResetPassword from '@/components/login/loginFormResetPassword/LoginFormResetPassword';

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resete a sua conta no site Dogs.',
};

type ResetSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ searchParams }: ResetSearchParams) {
  console.log(searchParams);
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>

      <LoginFormResetPassword
        keyToken={searchParams.key}
        login={searchParams.key}
      />
    </div>
  );
}
