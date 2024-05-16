'use client'
import { useFormState, useFormStatus } from "react-dom";

import createAccount from "@/actions/createAccount";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "@/components/helper/ErrorMessage";
import { useEffect } from "react";

import styles from './LoginCreate.module.css'

function FormButton() {
  const { pending } = useFormStatus()

  return <>
    { pending ? 
      <Button disabled={pending}>Cadastrando...</Button> :
      <Button>Cadastrar</Button>
    }
  </>
}

export default function LoginCreate() {
  const [state, action] = useFormState(createAccount, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    // Só faz o redirect via hardrefresh se estiver OK na geração do token
    if(state.ok) window.location.href = '/conta'
  }, [state.ok])

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="E-mail" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <Input label="Confirme a Senha" name="confirmPassword" type="password" />
        
        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
    </>
  )
}