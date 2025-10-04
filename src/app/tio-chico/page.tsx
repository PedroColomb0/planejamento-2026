// app/tio-chico/page.tsx

"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Definimos o tipo para os nossos blocos de texto
type TextBlock = {
  text: string;
  isFormatted?: boolean; // Flag para aplicar a formatação
};

export default function TioChicoPage() {
  const handleNavigate = () => {
    // ALTERAÇÃO: Trocamos 'router.push' por 'window.location.href' para recarregar.
    window.location.href = "/outra-pagina";
  };

  // ALTERAÇÃO AQUI: Substituímos a string 'texto' por um array de blocos.
  // Cada objeto define um trecho de texto e se deve ser formatado.
  const textBlocks: TextBlock[] = [
    { text: "Olá" },
    { text: " Grupo Rovema!", isFormatted: true },
    { text: " Muito prazer, eu sou o " },
    { text: "Tio Chico", isFormatted: true },
    { text: ", mas vocês também podem me chamar de " },
    { text: "cliente", isFormatted: true },
    { text: ". A partir do " },
    { text: "Planejamento Estratégico de 2026", isFormatted: true },
    { text: ", estarei no centro das estratégias e decisões, acompanhando de perto cada detalhe, iniciativa e ação. Reforçarei sempre a importância de compreenderem minhas necessidades e expectativas, para que " },
    { text: "juntos", isFormatted: true },
    { text: " possamos impulsionar o " },
    { text: "crescimento do grupo", isFormatted: true },
    { text: "." }
  ];

  // Calculamos o número total de caracteres para ajustar o delay do botão
  const totalCaracteres = textBlocks.reduce((acc, block) => acc + block.text.length, 0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      // O delayChildren deve ser ajustado para o total de caracteres mapeados
      transition: { staggerChildren: 0.02, delayChildren: 0.5 },
    }),
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };
    
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      // O delay deve usar o número total de caracteres (totalCaracteres)
      transition: { delay: totalCaracteres * 0.02 + 1, duration: 0.5 }
    }
  };

  // Variáveis para a classe de formatação
  const formattedClass = "font-bold text-yellow-400";

  return (
    <main
      onClick={handleNavigate}
      className="relative flex flex-col md:flex-row items-center justify-center h-screen overflow-hidden cursor-pointer p-8"
    >
      {/* O resto do seu código JSX... */}
      <div className="fixed top-8 left-8 z-10 w-[280px]">
        <div className="animate-head-beat-slow">
          <Image 
            src="/circulo-cabeca.png" 
            alt="Gráfico de um rosto" 
            width={800} 
            height={800} 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        
        <div className="relative text-white text-center mt-[-30px]">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider text-shadow-lg">
            DO DESAFIO À <br /> OPORTUNIDADE
          </h1>
          <p className="text-lg md:text-xl font-light uppercase tracking-[.25em] text-yellow-400 mt-2">
            2026
          </p>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image 
          src="/tio-chico.png"
          alt="Mascote Tio Chico"
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mt-8 md:mt-0 md:ml-8 max-w-4xl bg-slate-900/80 backdrop-blur-md border border-cyan-500 rounded-2xl p-10 shadow-2xl shadow-cyan-500/30"
      >
        <motion.p
          className="text-white text-xl lg:text-2xl leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ALTERAÇÃO NA RENDERIZAÇÃO: Mapeamos os blocos de texto */}
          {textBlocks.map((block, blockIndex) => {
            const caracteres = Array.from(block.text);
            
            // Se o bloco é formatado, envolvemos os caracteres animados
            // em um span com a formatação (negrito e amarelo)
            if (block.isFormatted) {
              return (
                <span key={`block-${blockIndex}`} className={formattedClass}>
                  {caracteres.map((char, charIndex) => (
                    <motion.span 
                      key={`char-${blockIndex}-${charIndex}`} 
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
            }

            // Se o bloco não é formatado, apenas mapeamos os caracteres
            return caracteres.map((char, charIndex) => (
              <motion.span 
                key={`char-${blockIndex}-${charIndex}`} 
                variants={charVariants}
              >
                {char}
              </motion.span>
            ));
          })}
        </motion.p>
        
        <motion.div 
            className="flex justify-end mt-6"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
        >
          <button
            onClick={handleNavigate}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Vamos Lá!
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 right-8 z-10 w-[240px]">
        <Image src="/Grupo Rovema.png" alt="Logo do Grupo Rovema" width={240} height={66} style={{ objectFit: 'contain' }} />
      </div>
    </main>
  );
}