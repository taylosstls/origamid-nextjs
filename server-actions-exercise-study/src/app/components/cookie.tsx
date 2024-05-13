'use client'
import { getCookie } from "@/app/actions/get-cookie"
import { useState } from "react"

export default function Cookie() {

  const [token, setToken] = useState('')

  // Com o httpOnly true, usar document.cookie retornará vazio,
  async function handleClick() {
    const tokenCookie = await getCookie('token')

    console.log(tokenCookie)
    tokenCookie ? setToken(tokenCookie) : ''
  }
  return <div>
    <h5>Cookie:
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </h5>

    <button onClick={handleClick}>Pegar cookie</button>

  </div>
}