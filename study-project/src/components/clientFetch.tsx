'use client'
import { useEffect, useState } from 'react'

type Produto = {
  id: number
  nome: string
}

export default function ClientFetch({awaitTime} : {awaitTime?: number}) {
  const [data, setData] = useState<Produto[]>([])

  useEffect(() => {
    async function fetchData() {
      
      if (awaitTime) await new Promise(resolve => setTimeout(resolve, awaitTime * 1000))

      const response = await fetch('https://api.origamid.online/produtos', {
        cache: 'no-store'
      })
      const productList = (await response.json()) as Produto[]

      console.log(productList)
      setData(productList)
    }

    fetchData()
  }, [awaitTime])

  return (
    <div>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  )
}
