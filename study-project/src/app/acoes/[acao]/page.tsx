type Acao = {
  nome: string,
  atualizada: string,
  preco: number
}

type PageParams = {
  params: {
    acao: string
  }
}

export default async function AcaoPage({ params }: PageParams) {
  console.log(params)
  const response = await fetch(`https://api.origamid.online/acoes/${params.acao}`, {
    next: {
      revalidate: 5 // segundos
    }
  });

  const acao = (await response.json()) as Acao;

  return <main>
    <h2>Nome: {acao.nome}</h2>
    <p>Preço: {acao.preco}</p>
    <p>Atualizado: {acao.atualizada}</p>
  </main>
}