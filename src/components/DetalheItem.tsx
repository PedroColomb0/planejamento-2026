// components/DetalheItem.tsx

"use client";

import { motion } from "framer-motion";

type Props = {
  titulo: string;
  subItens: string[];
  onClose: () => void;
  onSubItemClick: (subItem: string) => void;
};

export default function DetalheItem({ titulo, subItens, onClose, onSubItemClick }: Props) {
  const raioOrbita = 350;
  const containerSize = 800;
  const bolaCentralSize = 256;
  const subItemSize = 128;
  const anguloOffset = -90;

  const containerCenter = containerSize / 2;
  const raioBolaCentral = bolaCentralSize / 2;
  const raioSubItem = subItemSize / 2;
  
  // As animações 'variants' não precisam de alteração
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  return (
    <motion.div
      // MUDANÇA 1: Usamos 'fixed' para cobrir a tela inteira.
      // A classe 'inset-0' foi substituída por 'top-0 left-0 w-full h-full'.
      className="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose} // O clique no fundo fecha o componente
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
        // MUDANÇA 2: REMOVEMOS o stopPropagation daqui.
        // Agora, clicar no espaço vazio entre as bolas também fechará o modal.
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <svg className="absolute top-0 left-0 w-full h-full z-0">
          {subItens.map((_, index) => {
            const anguloGraus = (index * (360 / subItens.length)) + anguloOffset;
            const anguloRadianos = anguloGraus * (Math.PI / 180);
            const startX = containerCenter + raioBolaCentral * Math.cos(anguloRadianos);
            const startY = containerCenter + raioBolaCentral * Math.sin(anguloRadianos);
            const endX = containerCenter + (raioOrbita - raioSubItem) * Math.cos(anguloRadianos);
            const endY = containerCenter + (raioOrbita - raioSubItem) * Math.sin(anguloRadianos);
            
            return (
              <motion.line
                key={`line-${index}`} x1={startX} y1={startY} x2={endX} y2={endY}
                stroke="white" strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            );
          })}
        </svg>
        
        <motion.div 
          variants={itemVariants}           
          className="w-78 h-78 rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/50"
          // MUDANÇA 3: Adicionamos o stopPropagation aqui para a bola central.
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-3xl text-center font-bold text-white uppercase tracking-widest px-4">{titulo}</h1>
        </motion.div>

        {subItens.map((item, index) => {
          const anguloGraus = (index * (360 / subItens.length)) + anguloOffset;
          const anguloRadianos = anguloGraus * (Math.PI / 180);
          const x = raioOrbita * Math.cos(anguloRadianos);
          const y = raioOrbita * Math.sin(anguloRadianos);

          return (
            <motion.div
              key={item}
              variants={itemVariants}
              className="absolute w-32 h-32 rounded-full flex items-center justify-center text-center bg-slate-900/80 border-2 border-cyan-400 backdrop-blur-md z-10 cursor-pointer"
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: 'translate(-50%, -50%)' }}
              // MUDANÇA 4: Adicionamos o stopPropagation aqui para as bolas de subitens.
              onClick={(e) => {
                e.stopPropagation(); // Impede que o clique "vaze" para o fundo
                onSubItemClick(item); // Executa a ação original de clicar no subitem
              }}
            >
              <span className="text-cyan-300 text-sm font-bold uppercase">{item}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}