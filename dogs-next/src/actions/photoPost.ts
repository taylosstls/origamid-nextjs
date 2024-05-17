'use server';
import apiError from '@/functions/api-error';
import { PHOTO_POST } from '@/functions/api';
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as string | null;
  const peso = formData.get('peso') as string | null;
  const img = formData.get('img') as File;

  console.log(nome, idade, peso, img);

  try {
    if (!token || !nome || !idade || !peso)
      throw new Error('Preencha os dados');
    if (img.size === 0) throw new Error('Selecione uma foto');

    const postPhoto = PHOTO_POST();

    const response = await fetch(postPhoto.url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('E-mail ou usuário já registrados');
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag('photos');
  redirect('/');
}
