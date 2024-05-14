export type Product = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

export default async function ProductListPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 10 * 60 // update a cada 10 minutos, se nenhum produto for cadastrado dentro da API
    }
  })
  const listProducts = await response.json() as Product[]

  // console.log(listProducts)

  return (
    <main>
      <h1 className="text-2xl font-bold">Produtos</h1>

      <ul>
        {listProducts?.map((product: Product) => {
          return <li key={product.id}>{product.nome} - {product.preco.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</li>
        })}
      </ul>
    </main>
  );
}
