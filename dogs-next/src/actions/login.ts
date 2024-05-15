'use server'
import { cookies } from "next/headers"

import apiError from "@/functions/api-error"
import { TOKEN_POST } from "@/functions/api"

export default async function Login(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

  console.log(username, password)

  try {
    if(!username || !password) throw new Error('Preencha os dados')
    
    const tokenPostUrl = TOKEN_POST()

    // Usando o formData não precisa de headers passando o Content-Type
    // e o return nem precisa ser convertido para JSON.Stringify
    const response = await fetch(tokenPostUrl.url, {
      method: 'POST',
      body: formData
    })
    
    if(!response.ok) throw new Error('Senha ou usuário inválidos')

    const data = await response.json()
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 60seg x 60min x 24hrs = 1 dia de duração
    })

    console.log(data)
    return {data: null, ok: true, error: ''}

  } catch (error: unknown) {
    return apiError(error)
  }
}