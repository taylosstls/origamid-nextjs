import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex gap-4">
      <li>Lista de páginas:</li>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/produtos">Produtos</Link></li>
      <li><Link href="/produtos/adicionar">Adicionar</Link></li>
    </ul>
  )
}