export type ProductParams = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export default async function ProdutosLista() {
  let produtos: ProductParams[] = []
  try {
    const response = await fetch('https://api.origamid.online/produtoss', {
      next: {
        revalidate: 10,
      },
    });

    console.log(response)
    if (!response.ok) throw new Error('Falha ao buscar dados dos produtos.');
    
    produtos = (await response.json()) as ProductParams[];
  } catch (error) {
    return <p>Ocorreu erro na exibição, o nome da fetch é: ``https://api.origamid.online/produtos``</p>
  }

    return <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}: R$ {produto.preco}
          </li>
        ))}
      </ul>
}