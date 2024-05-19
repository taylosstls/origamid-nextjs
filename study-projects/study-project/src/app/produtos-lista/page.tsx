import ClientFetch from '@/components/clientFetch'
import { Suspense } from 'react'

export default function ProdutosPage() {
  return (
    <main>
      <h1>Produtos com Fetch</h1>
      <Suspense fallback={'Carregando...'}>
        <ClientFetch />
      </Suspense>
      
      <Suspense fallback={'Carregando...'}>
        <ClientFetch awaitTime={5} />
      </Suspense>
    </main>
  )
}
