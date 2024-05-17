'use client';
import { useFormState, useFormStatus } from 'react-dom';

import loginAccount from '@/actions/loginAccount';
import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import ErrorMessage from '@/components/helper/ErrorMessage';
import { useEffect } from 'react';
import Link from 'next/link';

import styles from './LoginForm.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(loginAccount, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    // Só faz o redirect via hardrefresh se estiver OK na geração do token
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>

      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>

        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
