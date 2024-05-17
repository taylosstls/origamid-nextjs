'use server';
import apiError from '@/functions/api-error';
import { USER_POST } from '@/functions/api';
import loginAccount from './loginAccount';
import { passwordValidation } from '@/functions/password-account-validation';

export default async function createAccount(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;
  const confirmPassword = formData.get('confirmPassword') as string | null;

  console.log(username, email, password, confirmPassword);

  try {
    if (!username || !email || !password || !confirmPassword)
      throw new Error('Preencha os dados');
    if (username.length < 3)
      throw new Error('Nome de usuário deve ter no mínimo 3 caracteres');
    if (!email.includes('@')) throw new Error('E-mail inválido');

    passwordValidation({ password, confirmPassword })

    const createUser = USER_POST();

    const response = await fetch(createUser.url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('E-mail ou usuário já registrados');

    const { ok } = await loginAccount({ ok: true, error: '' }, formData);

    if (!ok) throw new Error('Erro ao logar');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
