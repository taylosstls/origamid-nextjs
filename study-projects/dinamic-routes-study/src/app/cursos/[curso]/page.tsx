import { getCurso, getCursos } from "@/api/cursos";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from 'next/navigation';
type CursoParams = {
  params: {
    curso: string
  }
}

// Gerando retorno de valores estáticos para serem acessíveis
// quando realizado o 'npm run build'
export async function generateStaticParams() {
  const cursos = await getCursos()

  return cursos.map((curso) => {
    curso: curso.slug
  })
}

export async function generateMetadata({params}: CursoParams): Promise<Metadata> {
  const curso = await getCurso(params.curso)

  console.log(curso)

  if (!curso.error) {
    return {
      title: `Curso de ${curso.nome}`,
      description: curso.descricao
    };
  } else {
    return {
      title: 'Cursos Origamid',
      description: 'Cursos online de Front End e UI Design.',
    };
  }
}

export default async function CursoId({params}: CursoParams) {
  console.log(params)

  const curso = await getCurso(params.curso)
  if (curso?.error) return notFound()

  return (
    <main>
      <h1 className="text-2xl font-bold uppercase mb-5">{curso.nome}</h1>
      <p className="font-bold uppercase">{curso.descricao}</p>
      <p>Total de Horas: {curso.total_horas}</p>
      <p>Total de Aulas: {curso.total_aulas}</p>

      <h2 className="text-xl font-bold mt-5">Aulas</h2>
      <ul className="">
        {curso.aulas.map((aula) => {
          return (
            <li key={aula.id} className="list-disc ml-8 mb-5">
              <h3 className="font-semibold">{aula.nome}</h3>
              <Link className="text-blue-500 hover:text-blue-700" href={`/cursos/${params.curso}/${aula.slug}`}> → Mais detalhes</Link>
            </li>
          )
        })}
      </ul>
    </main>
  );
}
