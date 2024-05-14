import Image from "next/image"

type AnimalsProps = {
  id: number,
  nome: string,
  descricao: string,
  imagem: string
}

export default async function AnimaisPage() {
  const response = await fetch('https://api.origamid.online/animais')
  const animais = await response.json() as AnimalsProps[]

  return (
    <main>
      <h1>Animais</h1>
      {animais.map((animal) => {
        return <ul key={animal.id}>
          <li><Image src={animal.imagem} alt={animal.descricao} width={1200} height={800} /></li>
        </ul>
      })}
    </main>
  )
}