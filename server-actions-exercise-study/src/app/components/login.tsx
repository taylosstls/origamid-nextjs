'use client'

import { FormEvent } from "react"
import { login } from "@/app/actions/login"

export default function Login() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value

    const response = await login(username, password)
    console.log(response)
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username" />
    </div>

    <div>
      <label htmlFor="password">Usuário</label>
      <input type="password" id="password" name="password" />
    </div>

    <div>
      <button type="submit">Logar</button>
    </div>

  </form>
}