'use client';
import { FormEvent, useRef } from "react";
import { Product } from "@/app/produtos/page";
import { addProduct } from "@/actions/add-product";
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    try {
      const dataProduct: Product = {
        id: new Date().getTime(),
        nome: event.currentTarget.nome.value,
        preco: Number(event.currentTarget.preco.value),
        descricao: event.currentTarget.descricao.value,
        estoque: Number(event.currentTarget.estoque.value),
        importado: event.currentTarget.importado.checked ? 1 : 0
      };
  
      console.log(dataProduct);
      const success = await addProduct(dataProduct);
  
      if (success) {
        alert('Produto adicionado com sucesso!');
        if (formRef.current) formRef.current.reset();

        router.push('/produtos');

      } else {
        alert('Falha ao adicionar o produto. Por favor, tente novamente.');
      }
    } catch (err) {
      console.error('Erro durante a submissão do formulário:', err);
      alert('Ocorreu um erro durante a submissão do formulário. Por favor, tente novamente.');
    }
  }
  
  return (
    <main>
      <h1 className="text-2xl font-bold">Produtos Adicionar</h1>

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        id="addProductForm"
        className="mx-auto p-10 w-full max-w-[500px]"
      >
        <div className="flex flex-col mb-5 gap-2">
          <label className="font-medium uppercase text-xs" htmlFor="nome">Nome</label>
          <input className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="nome" id="nome" />
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label className="font-medium uppercase text-xs" htmlFor="preco">Preço</label>
          <input className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" name="preco" id="preco" />
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label className="font-medium uppercase text-xs" htmlFor="descricao">Descrição</label>
          <input className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="descricao" id="descricao" />
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label className="font-medium uppercase text-xs" htmlFor="estoque">Estoque</label>
          <input className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" name="estoque" id="estoque" />
        </div>
        <div className="flex flex-row gap-2 mb-5">
          <label className="font-medium uppercase text-xs cursor-pointer flex flex-row gap-2 align-middle" htmlFor="importado">
            <input type="checkbox" name="importado" id="importado" />
            Produto Importado
          </label>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Cadastrar</button>
        </div>
      </form>
    </main>
  );
}
