import Login from "@/actions/login";

export default async function LoginForm() {
  return (
    <>
    <form action={Login}>
      <input type="text" name="username" id="username" placeholder="Usuário" />
      <input type="password" name="password" id="password" placeholder="Senha" />
      <button>Entrar</button>
    </form>
    </>
  )
}