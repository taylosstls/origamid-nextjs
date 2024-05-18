'use server';

import { cookies } from 'next/headers';
import { PHOTO_DELETE } from '@/functions/api';
import apiError from '@/functions/api-error';
import { PhotoProps } from './photosGet';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: PhotoProps;
  comments: Comment[];
};

export default async function photoDelete(id: string) {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Token não encontrado.');

    const getPhoto = PHOTO_DELETE(id);
    const response = await fetch(getPhoto.url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) throw new Error('Erro ao deletar a publicação');

    //return { data, ok: true, error: '' };
  } catch (error) {
    console.log(error);
    return apiError(error);
  }

  revalidateTag('photos');
  redirect('/conta');
}
