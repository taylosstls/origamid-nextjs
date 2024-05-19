'use client'

import { FormEvent } from "react"

export default function Login() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
    console.log(username, password)

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })

    })

    console.log(response)

    if (response.ok) window.location.href = '/'

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