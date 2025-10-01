"use client";

import { motion } from "framer-motion";

type Props = {
  titulo: string;
  onClose: () => void;
};

export default function DetalheItem({ titulo, onClose }: Props) {
  const subItens = ["Subitem 1", "Subitem 2", "Subitem 3", "Subitem 4", "Subitem 5", "Subitem 6"];
  const raio = 200; // O raio do círculo onde as bolinhas vão ficar

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1, // Animação em cascata para as bolinhas
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    // Backdrop para fechar
    <motion.div
      className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Container principal da animação */}
      <motion.div
        className="relative flex items-center justify-center w-[500px] h-[500px]"
        onClick={(e) => e.stopPropagation()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Bola Central com o Título */}
        <motion.div
          variants={itemVariants}
          className="w-48 h-48 rounded-full flex items-center justify-center z-10
                     bg-cyan-500 shadow-lg shadow-cyan-500/50"
        >
          <h1 className="text-2xl text-center font-bold text-white uppercase tracking-widest">
            {titulo}
          </h1>
        </motion.div>

        {/* Mapeamento para criar as 6 bolinhas em órbita */}
        {subItens.map((item, index) => {
          // Calcula o ângulo para cada bolinha (360 graus / 6 itens = 60 graus por item)
          const angulo = index * 60;
          // Calcula a posição X e Y usando trigonometria
          const x = raio * Math.cos(angulo * (Math.PI / 180));
          const y = raio * Math.sin(angulo * (Math.PI / 180));

          return (
            <motion.div
              key={item}
              variants={itemVariants}
              className="absolute w-24 h-24 rounded-full flex items-center justify-center text-center
                         bg-slate-900/50 border border-cyan-400 backdrop-blur-md"
              style={{
                // Move a bolinha para a posição calculada a partir do centro
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                // Corrige o centro da bolinha
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="text-cyan-300 text-xs font-bold uppercase">{item}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}