import Link from 'next/link';

// Remova a importação: import FundoTecnologico from '@/components/FundoTecnologico';

export default function HomePage() {
  return (
    // A classe "relative" não é mais necessária aqui, mas pode manter se quiser
    <main className="flex items-center justify-center h-screen overflow-hidden">
      {/* A chamada para <FundoTecnologico /> foi REMOVIDA daqui */}

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