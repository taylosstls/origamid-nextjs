'use server';
import { Product } from "@/app/produtos/page";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function addProduct(product: Product): Promise<boolean> {
  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    const addProduct = await response.json();
    console.log(addProduct);

    revalidatePath('/produtos');

    // redirect('/produtos'); -> Redireciona pelo server
    // Retorna true indicando sucesso
    return true;
  } catch (err) {
    console.error(err);

    // Retorna false indicando falha
    return false;
  }
}
