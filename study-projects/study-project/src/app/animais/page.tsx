import Image from "next/image"
import styles from './animais.module.css'

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
      <h1 className={styles.titulo}>Animais</h1>
        
      <ul className={styles.animais}>
        {animais.map((animal, i) => {
        return (
          /** Qualidade padrão do next 75% e converte a JPG/PNG para webp, SVG não precisa de sizes
          O sizes gera novas imgs de largura conforme pré-definido no deviceSizes
          é possível usar mediaquery pra não carregar sempre 100vw, no caso de 2 / 3 / 4 colunas, etc.
          deviceSizes: [600, 800, 1200, 2400, 3600] */
          <li key={animal.id}>
            <p>{animal.nome}</p>
            <Image
              src={animal.imagem}
              alt={animal.descricao}
              width={1200} height={800} quality={85}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority={i < 2} // Prioriza só o carregamento dos dois primeiros, o restante é tudo via lazyload
              />
          </li>
        )
        }
      )}
      </ul>


      <h2 style={{ marginTop: '50px' }}>Imagens Locais</h2>
      <p>Imagem pega da pasta public/imagens</p>
      <Image
        src="/imagens/imagem-do-public.jpeg"
        width={1350}
        height={1350}
        alt="Minha foto do Insta"
        sizes="50vw"
      />
    </main>
  )
}