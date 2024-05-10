'use client'
import { useEffect, useState } from "react"

type Produto = {
  id: number;
  nome: string;
};

export default function ClientFetch() {
  const [data, setData] = useState<Produto[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos');
      const productList = (await response.json()) as Produto[];

      console.log(productList)
      setData(productList)
    }

    fetchData()
  }, [])

  return <div>
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  </div>
}