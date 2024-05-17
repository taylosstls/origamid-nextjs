import LoginFormCreateAccount from '@/components/login/loginFormCreateAccount/LoginFormCreateAccount';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie sua conta',
  description: 'Crie sua conta no site Dogs.',
};

export default async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <LoginFormCreateAccount />
    </div>
  );
}
