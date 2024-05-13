// app/api/perfil/route.ts
import { cookies } from 'next/headers';

export async function GET() {
  // Passa o token para autorizar a rota de GET
  const token = cookies().get('token')?.value;
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const data = response.ok ? await response.json() : null;
  return Response.json(data);
}
