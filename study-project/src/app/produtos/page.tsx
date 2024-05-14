import AdicionarProduto from '@/components/adicionarProduto'
import Link from 'next/link'

export default function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>

      <Link style={{marginBottom: '50px', display: 'block'}} href="/produtos/5">Produto monitor</Link>

      <AdicionarProduto />
    </main>
  )
}
