import { cookies } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean,
  usuario: string
}

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    usuario: ''
  }
  const token = cookies().get('token')?.value

  console.log(token)

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })

  response.ok ? conta = await response.json() as Conta : ''

  return (
    <ul className="menu">
      <li>
        <Link href='/'>Homepage</Link>
      </li>
      <li>|</li>
      <li>
        {
          conta.autorizado ?
            `Olá, ${conta.usuario}` :
            <Link href='/login'>Login</Link>
        }
      </li>
    </ul>
  )
}