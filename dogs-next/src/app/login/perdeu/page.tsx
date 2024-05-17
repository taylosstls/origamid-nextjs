import { Metadata } from 'next';
import LoginFormForgotPassword from '@/components/login/loginFormForgotPassword/LoginFormForgotPassword';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua conta no site Dogs.',
};

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>

      <LoginFormForgotPassword />
    </div>
  );
}
