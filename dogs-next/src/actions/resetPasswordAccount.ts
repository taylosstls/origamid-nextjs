'use server';
import apiError from '@/functions/api-error';
import { PASSWORD_RESET } from '@/functions/api';
import { redirect } from 'next/navigation';

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

    if (
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*()-_=+{};:,<.>]/.test(password)
    ) {
      throw new Error(
        'Sua nova senha deve conter: Pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.'
      );
    }

    if (password !== confirmPassword)
      throw new Error('As senhas não coincidem');

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
