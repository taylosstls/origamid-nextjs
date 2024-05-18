'use server';

import { PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';

export type PhotoProps = {
  id: string;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit
) {
  try {
    const options = optionsFront || {
      next: {
        revalidate: 5 * 60, // revalida automaticamente a cada 5 minutos
        tags: ['photos'], // ou se subir alguma foto
      },
    };
    const getPhotos = PHOTOS_GET({ page, total, user });
    const response = await fetch(getPhotos.url, options);

    if (!response.ok) throw new Error('Erro ao carregar as imagens');

    const data = (await response.json()) as PhotoProps[];
    console.log(data);

    return { data, ok: true, error: '' };
  } catch (error) {
    console.log(error);
    return apiError(error);
  }
}
