import Image from 'next/image';

export default function HomePage() {
  return (
    // Container principal:
    // - `relative`: Essencial para posicionar os elementos filhos (logo e círculo).
    // - `flex`, `items-center`, `justify-center`: Centraliza o bloco de texto principal.
    // - `h-screen`: Garante que o container ocupe 100% da altura da tela.
    // - `overflow-hidden`: Impede a criação de barras de rolagem.
    <main 
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/background-stars.jpg')" }} // <-- Troque pelo seu arquivo de fundo
    >
      {/* IMAGEM 1: Círculo com a cabeça
        - `absolute`: Permite posicionar a imagem livremente dentro do container `main`.
        - `left-0`: Alinha a imagem à esquerda.
        - `top-1/2 -translate-y-1/2`: Um truque para centralizar verticalmente a imagem.
        - `z-10`: Garante que a imagem fique sobre o fundo.
        - `w-1/3`, `max-w-xs`: Controla o tamanho da imagem para ser responsiva.
      */}
      <div className="absolute left-0 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 z-10 w-1/3 max-w-xs md:max-w-sm lg:max-w-md">
        <Image 
          src="/circulo-cabeca.png" // <-- Troque pelo seu arquivo PNG do círculo
          alt="Gráfico de um rosto com ícones de tecnologia"
          width={500}
          height={500}
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      {/* Conteúdo de Texto Central
        - `z-20`: Garante que o texto fique na frente de todos os outros elementos.
      */}
      <div className="z-20 text-center text-white">
        
        {/* Texto Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-shadow-lg">
          Do Desafio à Oportunidade
        </h1>

        {/* Subtexto */}
        <p className="mt-4 text-xl md:text-2xl font-light uppercase tracking-[.25em] text-yellow-400">
          Diretrizes
        </p>
      </div>

      {/* IMAGEM 2: Logo do Grupo Rovema
        - `absolute`: Permite posicionar a imagem livremente.
        - `bottom-10 right-10`: Posiciona a logo a 10 unidades de distância da borda inferior e direita.
        - `z-10`: Garante que a logo fique sobre o fundo.
      */}
      <div className="absolute bottom-10 right-10 z-10">
        <Image 
          src="/Grupo Rovema.png" // <-- Troque pelo seu arquivo PNG da logo
          alt="Logo do Grupo Rovema" 
          width={180} 
          height={50} 
        />
      </div>
    </main>
  );
}