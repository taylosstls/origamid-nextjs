import Link from 'next/link'

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/produtos-lista#empresas" scroll={true} prefetch={true}>
          Produtos Lista
        </Link>
      </li>
      <li>
        <Link href="/produtos-lista-erro">Produtos com Erro</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      <li>
        <Link href="/acoes-cache">Cache</Link>
      </li>
    </ul>
  )
}
