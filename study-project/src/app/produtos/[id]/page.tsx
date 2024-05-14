type PageParams = {
  params: {
    id: string
  }
}

export type ProductParams = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export default async function ProdutosInternoPage({ params }: PageParams) {
  console.log(params)

  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )
  const data = (await response.json()) as ProductParams

  console.log(data)

  return (
    <main>
      <h1>Página Interna de Produtos</h1>
      <p>Id do produto: {data.id}</p>
      <p>Nome do produto: {data.nome}</p>
      <p>
        Preço do produto:{' '}
        {data.preco.toLocaleString('pt-br', {
          currency: 'BRL',
          style: 'currency',
          maximumFractionDigits: 2,
        })}
      </p>
      <p>Descrição do produto: {data.descricao}</p>
      <p>Estoque do produto: {data.estoque}</p>
      <p>Produto importado: {data.importado ? 'Sim' : 'Não'}</p>
    </main>
  )
}
