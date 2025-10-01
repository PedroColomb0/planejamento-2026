import Link from 'next/link';
import FundoTecnologico from '@/components/FundoTecnologico'; // Ajuste o caminho se necessário

export default function HomePage() {
  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Componente do Fundo Animado */}
      <FundoTecnologico />

      {/* Conteúdo da Página */}
      <div className="z-10 text-center">
        <Link
          href="/outra-pagina"
          className="text-white text-5xl md:text-7xl font-bold cursor-pointer 
                     hover:text-cyan-300 transition-colors duration-300
                     hover:scale-110 transform-gpu transition-transform"
        >
          bom dia
        </Link>
      </div>
    </main>
  );
}