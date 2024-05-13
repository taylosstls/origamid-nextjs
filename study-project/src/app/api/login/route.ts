// app/api/login/route.ts
import { cookies } from 'next/headers';

export async function POST() {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),
  });
  const data = await response.json();
  // get, set, delete, has, getAll
  cookies().set('token', data.token, {
    httpOnly: true, // se comunica apenas via https
    secure: true, // não exibe no console.log via frontend como documents.cookie
    sameSite: 'lax',
  });
  return Response.json(data);
}
