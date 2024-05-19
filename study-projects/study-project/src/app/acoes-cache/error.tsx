// acoes-cache/error.tsx
'use client'; // Precisa ser um client component

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h2>Um erro ocorreu.</h2>
      {/* apenas para teste, mostre uma mensagem genérica para o usuário */}
      <p>{error.message}</p>
      
      <button onClick={() => reset()}>Tenta carregar SÓ o componente novamente.</button>
    </div>
  );
}
