// solução de importação
import Acessos from '@/components/acessos'
import ServerFetch from '@/components/serverFetch'
import Width from '@/components/width'

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Acessos />
      <Width />

      <ServerFetch />
    </main>
  )
}
