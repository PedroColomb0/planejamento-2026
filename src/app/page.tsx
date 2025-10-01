"use client";

import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {
  return (
    <Link href="/outra-pagina" className="contents">
      <main
        className="relative flex items-center justify-center h-screen overflow-hidden bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: "url('/background-stars.jpg')" }}
      >
        <div className="relative w-full h-full max-w-screen-xl mx-auto">

          <div className="absolute w-1/2 md:w-2/5 top-[22%] -translate-y-1/4 left-1/2 -translate-x-1/2 md:left-0 md:top-[43%] md:-translate-y-1/2 md:translate-x-0 md:-ml-24 animate-head-beat-slow">
            <Image
              src="/circulo-cabeca.png"
              alt="Gráfico de um rosto com ícones de tecnologia"
              width={800}
              height={800}
              style={{ objectFit: 'contain' }}
              priority // AJUSTE: Adicionado para otimização de LCP
            />
          </div>

          <div className="absolute w-full px-4 top-2/3 -translate-y-2/3 md:top-1/2 md:-translate-y-1/2 md:left-1/4 md:w-2/3 z-10">
            <div className="flex flex-col items-center md:items-start">

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-shadow-lg text-center md:text-left">
                DO DESAFIO À <br /> OPORTUNIDADE
              </h1>

              <p className="mt-4 text-lg md:text-xl font-light uppercase tracking-[.25em] text-yellow-400">
                Diretrizes
              </p>

              <div className="mt-8 md:self-end">
                <Image
                  src="/Grupo Rovema.png"
                  alt="Logo do Grupo Rovema"
                  width={240}
                  height={66}
                  style={{ height: 'auto' }} // AJUSTE: Adicionado para manter a proporção
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </Link>
  );
}