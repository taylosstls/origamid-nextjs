import { Metadata } from "next"
import LoginForgotPassword from "@/components/login/loginForgotPassword/LoginForgotPassword"

export const metadata: Metadata = {
  title:'Perdeu a senha | Dogs',
  description: 'Recupere a sua conta no site Dogs.'
}

export default async function PerdeuPage() {
  return <div className="animeLeft">
    <h1 className="title">Perdeu a senha?</h1>

    <LoginForgotPassword />
  </div>
}