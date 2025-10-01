import Link from 'next/link';

export default function OutraPagina() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Você chegou na outra página!
      </h1>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg
                   hover:bg-cyan-400 transition-colors duration-300"
      >
        Voltar ao Início
      </Link>
    </main>
  );
}