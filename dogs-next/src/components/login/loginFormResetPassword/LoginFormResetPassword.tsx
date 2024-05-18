'use client';
import { useFormState, useFormStatus } from 'react-dom';

import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import ErrorMessage from '@/components/helper/errorMessage/ErrorMessage';

import resetPasswordAccount from '@/actions/resetPasswordAccount';

import styles from './LoginFormResetPassword.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Processando requisição...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}

export default function LoginFormResetPassword({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(resetPasswordAccount, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Nova Senha" name="password" type="password" />
        <Input
          label="Confirme a Senha"
          name="confirmPassword"
          type="password"
        />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
