import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import PlacaSuperior from "@/components/PlacaSuperior";
import Link from "next/link";

export default function OutraPagina() {
  const labels = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];

  return (
    <main className="flex items-center justify-center h-screen p-4">
      
      <div className="relative flex items-center justify-center">

        <AnimacaoOrbital 
          imagemCentral="/atom-icon.svg"
          itensDaOrbita={labels}
        />

        {/* Subindo ainda mais com um valor negativo */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2"> {/* ALTERADO: de top-0 para -top-8 */}
          <PlacaSuperior />
        </div>

      </div>
      
      <div className="absolute bottom-10">
        <Link
          href="/"
          className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg
                     hover:bg-cyan-400 transition-colors duration-300"
        >
          Voltar ao Início
        </Link>
      </div>

    </main>
  );
}