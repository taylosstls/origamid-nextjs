import Menu from "@/components/menu";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ops... 404 - Página não encontrada",
  description: "Não foi possível encontrar a informação solicitada no momento.",
};

export default async function NotFoundPage() {
  return (
    <main>
      <Menu />
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <Link href="/">Volte para a Home</Link>
    </main>
  );
}
