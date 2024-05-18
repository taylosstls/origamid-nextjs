'use server';
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';

import apiError from '@/functions/api-error';
import { COMMENT_POST } from '@/functions/api';
import { Comment } from './photoGet';
import { error } from 'console';

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;

  console.log(token, comment, id);

  try {
    if (!token || !comment || !id) throw new Error('Preencha os dados');

    const commentPost = COMMENT_POST(id);

    const response = await fetch(commentPost.url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('E-mail ou usuário já registrados');
    const data = (await response.json()) as Comment;

    revalidateTag('comment');
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
