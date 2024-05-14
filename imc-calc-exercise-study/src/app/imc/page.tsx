import IMC from "@/components/imc";
import Menu from "@/components/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMC Calc",
  description: "Primeiro exercício de IMC",
};

export default function IMCPage() {
  return (
    <main>
      <Menu />
      <h1 className="text-2xl font-bold">IMC</h1>

      <IMC />
    </main>
  );
}
