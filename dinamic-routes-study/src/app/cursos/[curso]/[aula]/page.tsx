import { Aula, getAula, getCurso, getCursos } from "@/api/cursos";
import Link from "next/link";

type AulaParams = {
  params: {
    curso: string,
    aula: string,
  }
}

export async function generateStaticParams({params}: AulaParams) {
  const cursos = await getCursos()
  const aulas = await Promise.all(
    cursos.map((curso) => getCurso(curso.slug))
  )

  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: cursos.find(curso => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }))
}

export default async function CursoAula({params}: AulaParams) {
  console.log(params)

  const aula = await getAula(params.curso, params.aula)
  return (
    <main>
      <h1 className="text-2xl font-bold">{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração do curso: {aula.tempo} horas</p>
      <Link className="text-blue-500 hover:text-blue-700" href={`/cursos/${params.curso}`}> ← Voltar</Link>
    </main>
  );
}
