'use client';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import forgotAccount from '@/actions/forgotAccount';
import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import ErrorMessage from '@/components/helper/errorMessage/ErrorMessage';

import styles from './LoginFormForgotPassword.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Recuperar</Button>
      )}
    </>
  );
}

export default function LoginFormForgotPassword() {
  const [url, setURL] = useState('');

  const [state, action] = useFormState(forgotAccount, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    setURL(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="E-mail / Usuário" name="login" type="text" />
        <input type="hidden" name="url" value={`${url}`} />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: '#4C1' }}>
            E-mail de recuperação enviado com sucesso
          </p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
