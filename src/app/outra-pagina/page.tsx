import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import Link from "next/link";

export default function OutraPagina() {
  // Criamos a lista de textos que serão exibidos nas bolas
  const labels = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-4">
      
      <AnimacaoOrbital 
        imagemCentral="/atom-icon.svg" // Lembre-se de trocar pelo seu PNG
        itensDaOrbita={labels} // Passamos a lista de textos para o componente
      />

      <div className="mt-12">
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