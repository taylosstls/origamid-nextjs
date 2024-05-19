import { cookies } from "next/headers"
import { NextRequest } from "next/server"

type LoginProps = {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json() as LoginProps

  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: body.username, //dog
      password: body.password //dog
    })
  })

  if (!response.ok) {
    return Response.json({ autorizado: false, erro: 'Dados incoretos' }, { status: 401 })
  }

  const data = await response.json()

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true
  })

  return Response.json({ autorizado: true })
}