import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex gap-4">
      <li>Lista de páginas:</li>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/cursos">Cursos</Link></li>
    </ul>
  )
}