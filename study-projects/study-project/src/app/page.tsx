'use client'
import { useEffect, useState } from 'react';
import { setCookie } from '@/actions/set-cookie';

export default function HomePage() {
  const [valor, setValor] = useState('');

  async function handleClick() {
    const response = await setCookie('segredo', '123456');
    console.log(response);

    setValor(response.value);
  }

  useEffect(() => {
    setCookie('width', document.documentElement.clientWidth.toString());
  }, []);

  return (
    <main>
      <h1>Home: {valor}</h1>

      <button onClick={handleClick}>Definir Cookies</button>

    </main>
  )
}
