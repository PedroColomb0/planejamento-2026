// DetalheItem.tsx

"use client";

import { motion } from "framer-motion";

type Props = {
  titulo: string;
  subItens: string[];
  onClose: () => void;
  onSubItemClick: (subItem: string) => void; // NOVO: Função para lidar com clique no subitem
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

  const containerVariants = { /* ... (mesmos variants de antes) */ };
  const itemVariants = { /* ... (mesmos variants de antes) */ };

  return (
    <motion.div
      className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose} // VOLTA UM NÍVEL
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
        onClick={(e) => e.stopPropagation()}
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
        
        <motion.div variants={itemVariants}            
         className="w-64 h-64 rounded-full flex items-center justify-center z-10 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/50"
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
              onClick={() => onSubItemClick(item)} // NOVO: ENTRA EM UM NOVO NÍVEL
            >
              <span className="text-cyan-300 text-sm font-bold uppercase">{item}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}