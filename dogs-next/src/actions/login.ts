'use server'

import { cookies } from "next/headers"

export default async function Login(formData: FormData) {
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

  console.log(username, password)

  // formData não precisa de headers passando o Content-Type
  // nem precisa ser convertido para JSON.Stringify
  const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',
    body: formData
  })

  const data = await response.json()
  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 60seg x 60min x 24hrs = 1 dia de duração
  })

  console.log(data)
}