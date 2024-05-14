import { getCursos } from "@/api/cursos";
import Menu from "@/components/menu";
import { Metadata } from "next";
import Link from "next/link";

// Força a página a ser dinâmica e toda vez que acessada é gerada um novo conteúdo
export const dynamic = "force-dynamic";

// Create file Metadata
export const metadata: Metadata = {
  title: 'Cursos Origamid',
  description: 'Cursos online de Front End e UI Design.',
  keywords: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
  authors: [{ name: 'André Rafael', url: 'https://andrerafael.com' }],
};

export default async function CursosPage() {
  const cursos = await getCursos()

  return (
    <main>
      <Menu />
      <h1 className="text-2xl font-bold mb-5">Cursos</h1>

      <ul className="flex gap-5">
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link className="text-blue-500 hover:text-blue-700" href={`cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
