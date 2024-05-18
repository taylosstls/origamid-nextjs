'use server';

import { cookies } from 'next/headers';
import { TOKEN_VALIDATE_POST } from '@/functions/api';
import apiError from '@/functions/api-error';


export default async function validateToken() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Acesso negado.');

    const validateToken = TOKEN_VALIDATE_POST(token);
    const response = await fetch(validateToken.url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });

    if (!response.ok) throw new Error('Erro ao validar o token');

    const data = (await response.json());
    console.log(data);

    return { data, ok: true, error: '' };
  } catch (error) {
    console.log(error);
    return apiError(error);
  }
}