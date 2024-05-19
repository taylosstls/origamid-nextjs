// components/AdicionarProduto.tsx
'use client';

import { adicionarProduto } from '@/actions/adicionar-produto';
import { useFormState, useFormStatus } from 'react-dom';

// Adicionando status pending para evitar múltiplos envios
function Button() {
  const status = useFormStatus();
  return (
    <div style={{marginTop: '20px'}}>
      <button type="submit" disabled={status.pending}>
        Adicionar
      </button>
    </div>
  );
}

export default function AdicionarProduto() {
  // Uso do formState é válido no cenário onde, caso o javascript esteja desativado
  // o envio do formulário ocorrerá normalmente.
   
  // Retorna um array, o estado e a ação nova
  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [], // Passando o objeto errors para validar erros de formulário
  });

  return (
    <form action={formAction}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" required />

      <label htmlFor="preco">Preço</label>
      <input type="number" id="preco" name="preco" required />

      <label htmlFor="descricao">Descrição</label>
      <input type="text" id="descricao" name="descricao" required />

      <label htmlFor="estoque">Estoque</label>
      <input type="number" id="estoque" name="estoque" required />

      <label htmlFor="importado">
        <input type="checkbox" id="importado" name="importado" />
        Importado
      </label>

      {state.errors.map((error, i) => (
        <p style={{ color: 'red' }} key={i}>
          {error}
        </p>
      ))}

      <Button />
    </form>
  );
}
