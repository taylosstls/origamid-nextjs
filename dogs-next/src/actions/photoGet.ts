'use server';

import { PHOTO_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { PhotoProps } from './photosGet';

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

export default async function photoGet(id: string) {
  try {
    const getPhoto = PHOTO_GET(id);
    const response = await fetch(getPhoto.url, {
      method: 'GET',
      next: {
        revalidate: 60,
        tags: ['photos', 'comment'],
      },
    });

    if (!response.ok) throw new Error('Erro ao carregar a publicação');

    const data = (await response.json()) as PhotoData;
    console.log(data);

    return { data, ok: true, error: '' };
  } catch (error) {
    console.log(error);
    return apiError(error);
  }
}
