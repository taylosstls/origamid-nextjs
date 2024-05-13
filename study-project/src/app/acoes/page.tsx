// SSG (Static Site Generation) - Se possuir dados dinâmicos, irá renderizar uma nova versão a partir do tempo determinado.
export const revalidate = 20

// SSR (Server Side Rendering) - renderizadas em todos os acessos.
// export const dynamic = 'force-dynamic';

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua')

  const acao = (await response.json()) as {
    simbolo: string
    atualizada: string
  }

  return (
    <main>
      <h1>{acao.simbolo}</h1>
      <p>{acao.atualizada}</p>
    </main>
  )
}

// CSR (Client Side Rendering) - parte da página é renderizada no cliente.
// Porém pode afetar o SEO, acessibilidade e a experiência do usuário (UX).
// 'use client';

// import React from 'react';

// type Acao = {
//   simbolo: string;
//   atualizada: string;
// };

// export default function AcoesPage() {
//   const [acao, setAcao] = React.useState<Acao | null>(null);

//   React.useEffect(() => {
//     fetch('https://api.origamid.online/acoes/lua')
//       .then((response) => response.json())
//       .then((json) => setAcao(json));
//   }, []);

//   if (acao === null) return null;

//   return (
//     <main>
//       <h1>{acao.simbolo}</h1>
//       <h2>{acao.atualizada}</h2>
//     </main>
//   );
// }
