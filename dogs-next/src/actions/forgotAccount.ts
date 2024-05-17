'use server';
import apiError from '@/functions/api-error';
import { PASSWORD_LOST } from '@/functions/api';

export default async function forgotAccount(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlReset = formData.get('url') as string | null;

  console.log(login, urlReset);

  try {
    if (!login) throw new Error('Informe seu e-mail ou usuário');

    const lostPassword = PASSWORD_LOST();

    const response = await fetch(lostPassword.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlReset,
      }),
    });

    if (!response.ok)
      throw new Error('E-mail ou usuário não encontrados na base de dados');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
