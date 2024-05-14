
// actions/adicionar-produto.ts
'use server';

import { ProductParams } from '@/app/produtos/[id]/page';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// unknown = não sabe como é o tipo de formato que está sendo enviado, não necessariamente pode ser uma string
function validarNome(nome: unknown) {
  return typeof nome === 'string' && nome.length > 1;
}

function validarPreco(preco: unknown) {
  return typeof preco === 'number' && preco >= 1;
}

export async function adicionarProduto(
  state: { errors: string[] },
  formData: FormData,
) {

  const produto: ProductParams = {
    nome: formData.get('nome') as string,
    preco: Number(formData.get('preco')),
    descricao: formData.get('descricao') as string,
    estoque: Number(formData.get('estoque')),
    importado: formData.get('importado') ? 1 : 0,
  };

  let errors = [];
  if (!validarNome(produto.nome)) errors.push('Nome inválido.');
  if (!validarPreco(produto.preco)) errors.push('Preço inválido.');

  if (errors.length > 0) return { errors };

  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });
    
    if (!response.ok) throw new Error('Erro ao adicionar o produto.');

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }

  revalidatePath('/produtos');
  redirect('/produtos');

  // não vai chegar ao return, porém é necessário para o TypeScript
  return { errors: [] };
}
