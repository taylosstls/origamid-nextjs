"use client"

import Link from 'next/link'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function Busca() {
  const searchParams = useSearchParams()
  const busca = searchParams.get('busca')

  return <div>Busca: {busca}</div>
}

export default function Menu() {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // setTimeout(() => {
    //   router.push('/') -> Faz o redirect da página
    //   // router.refresh() -> Atualiza a página sozinho
    // }, 120 * 1000)
    console.log('Rota mudou')
  }, [pathname, router])

  console.log(pathname)
  return <>
  <Suspense fallback={'Carregando...'}>
    <Busca />
  </Suspense>
    <ul className="menu">
    <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/animais">
          Animais
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
        <Link href="/acoes?busca=elemento">Ações: {
        // Use /acoes/xpt ou /acoes/lua para olhar o parâmetro utilizado
        params.acao}</Link>
      </li>
      <li>
        <Link href="/acoes-cache">Cache</Link>
      </li>
    </ul>
  </>
}
