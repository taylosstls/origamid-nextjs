import Atualizar from "@/components/atualizar";

type Cache = {
  nome: string,
  atualizada: string,
  preco: number
}

// quando não tiver a informação de revalidate na api, o default para geral será de 10 segundos
export const revalidate = 10

export default async function CreateCache() {
  // cache: 'force-cache' | 'no-store'
  const response = await fetch('https://api.origamid.online/acoes/luaa', {
    next: {
      revalidate: 5 // segundos
    }
  });

  if (!response.ok) throw new Error('Erro ao carregar a informação da lua.')

  const cache = await response.json() as Cache;

  return <main>
    <h1>Cache</h1>

    <Atualizar />

    <h2>Nome: {cache.nome}</h2>
    <p>Preço: {cache.preco}</p>
    <p>Atualizado: {cache.atualizada}</p>
  </main>
}