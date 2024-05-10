import { getAula } from "@/api/cursos";
import Menu from "@/components/menu";
import Link from "next/link";

type AulaParams = {
  params: {
    curso: string,
    aula: string,
  }
}

export default async function CursoAula({params}: AulaParams) {
  console.log(params)

  const aula = await getAula(params.curso, params.aula)
  return (
    <main>
      <Menu />
      <h1 className="text-2xl font-bold">{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração do curso: {aula.tempo} horas</p>
      <Link className="text-blue-500 hover:text-blue-700" href={`/cursos/${params.curso}`}> ← Voltar</Link>
    </main>
  );
}
