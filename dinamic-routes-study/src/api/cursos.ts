type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

// Puxa todos os cursos
export async function getCursos() {
  const response = await fetch('https://api.origamid.online/cursos');
  return (await response.json()) as Curso[];
}

// Puxa um curso específico pelo slug
export async function getCurso(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await response.json()) as Curso & {
    // expande e concatena o typescript, informando que o curso possui um array de aulas
    aulas: Aula[];
  };
}

// Puxa uma aula específica pelo slug do curso e slug da aula
export async function getAula(curso: string, aula: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`,
  );
  return (await response.json()) as Aula;
}
