'use client'

import { useState } from "react"

export default function IMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setIMC] = useState('')

  function handleIMC() {
    const calcAltura = Number(altura) / 100
    const total = (Number(peso) / (calcAltura * calcAltura)).toFixed(2)

    setIMC(total)
    document.getElementById("imc")?.classList.remove("hidden");

  }

  return <section className="bg-slate-300 rounded-md mx-auto w-1/2 p-12 flex flex-col gap-8">
    <div className="flex flex-col">
      <label className="text-base font-semibold" htmlFor="peso">Peso <span className="text-xs font-normal">(em kg)</span></label>
      <input
        className="h-11 rounded-md p-3 border border-gray-400 focus:border-blue-500 focus:outline-none"
        type="number"
        id="peso"
        name="peso"
        value={peso}
        placeholder="Exemplo: 70kg"
        onChange={(e) => setPeso(e.target.value)}
      />
    </div>
    
    <div className="flex flex-col">
      <label className="text-base font-semibold" htmlFor="altura">Altura <span className="text-xs font-normal">(em cm)</span></label>
      <input
        className="h-11 rounded-md p-3 border border-gray-400 focus:border-blue-500 focus:outline-none"
        type="number"
        id="altura"
        name="altura"
        value={altura}
        placeholder="Exemplo: 1.8m = 180"
        onChange={(e) => setAltura(e.target.value)}
      />
    </div>

    <div className="flex flex-col items-center">
      <button
        className="h-12 w-full max-w-[200px] bg-blue-600 transition-all hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleIMC}
        >
        Calcular
      </button>

      <div id="imc" className="hidden text-center mt-10">
        <p className="font-bold uppercase">Seu IMC é: {imc}</p>
      </div>
    </div>
  </section>
}