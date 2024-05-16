'use server'
import apiError from "@/functions/api-error"
import { USER_POST } from "@/functions/api"
import loginAccount from "./loginAccount"

export default async function createAccount(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null
  const confirmPassword = formData.get('confirmPassword') as string | null

  console.log(username, email, password, confirmPassword)

  try {
    if(!username || !email || !password) throw new Error('Preencha os dados');
    if(username.length < 3) throw new Error('Nome de usuário deve ter no mínimo 3 caracteres')
    if(!email.includes('@')) throw new Error('E-mail inválido')
    if (password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*()-_=+{};:,<.>]/.test(password)) {
      throw new Error(
        'Sua senha deve conter: Pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.'
      );
    }
    
    if(password !== confirmPassword) {
      throw new Error('As senhas não coincidem');
    }
    
    const createUser = USER_POST()

    const response = await fetch(createUser.url, {
      method: 'POST',
      body: formData
    })
    
    if(!response.ok) throw new Error('E-mail ou usuário já registrados')

    const {ok} = await loginAccount({ok: true, error: ''}, formData)

    if(!ok) throw new Error('Erro ao logar')
      
    return { data: null, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}