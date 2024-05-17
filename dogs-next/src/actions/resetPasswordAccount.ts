'use server';
import apiError from '@/functions/api-error';
import { PASSWORD_RESET } from '@/functions/api';
import { redirect } from 'next/navigation';
import { passwordValidation } from '@/functions/password-account-validation';

export default async function resetPasswordAccount(
  state: {},
  formData: FormData
) {
  const login = formData.get('login') as string | null;
  const key = formData.get('key') as string | null;
  const password = formData.get('password') as string | null;
  const confirmPassword = formData.get('confirmPassword') as string | null;

  console.log(login, key, password, confirmPassword);

  try {
    if (!login || !key || !password || !confirmPassword)
      throw new Error('Preencha os dados');

    passwordValidation({ password, confirmPassword })

    const passwordReset = PASSWORD_RESET();

    const response = await fetch(passwordReset.url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Não autorizado');
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect('/login');
}
