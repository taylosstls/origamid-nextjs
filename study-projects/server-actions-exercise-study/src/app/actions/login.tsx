'use server'

import { cookies } from "next/headers"

export async function login(username: string, password: string) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    console.log(response.ok)

    const data = await response.json()
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true
    })
    console.log(data)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}