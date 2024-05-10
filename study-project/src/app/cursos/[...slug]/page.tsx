
type CursoParams = {
  params: {
    slug: string[]
  }
}

export default async function CursoInternoPage({ params }: CursoParams) {

  console.log(params)
  return (
    <main>
      <h1>Página Slug de Cursos</h1>     
       {params.slug.join(' - ')}
    </main>
  );
}
