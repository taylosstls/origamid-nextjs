'use client'
import { useFormState, useFormStatus } from "react-dom";

import Login from "@/actions/login";
import Button from "@/components/forms/button";

function FormButton() {
  const { pending } = useFormStatus()

  return <>
    { pending ? 
      <Button disabled={pending}>Enviando...</Button> :
      <Button>Entrar</Button>
    }
  </>
}

export default function LoginForm() {
  const [state, action] = useFormState(Login , {
    ok: false,
    error: '',
    data: null
  })

  return <form action={action}>
    <input type="text" name="username" id="username" placeholder="Usuário" />
    <input type="password" name="password" id="password" placeholder="Senha" />
    <FormButton />

    <p>{state.error}</p>
  </form>
}