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
  const raioOrbita = 360;
  const containerSize = 800;
  const bolaCentralSize = 256;
  // NOVO TAMANHO: Aumentado de 152 para 164 (ou o valor desejado)
  const subItemSize = 164; 
  const anguloOffset = -90;

  const containerCenter = containerSize / 2;
  const raioBolaCentral = bolaCentralSize / 2;
  const raioSubItem = subItemSize / 2;
  
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  // FUNÇÃO DE FORMATAÇÃO (REVISADA para 4 linhas)
  const formatText = (text: string) => {
    const lines = text.split('|');
    const isMultiLine = lines.length > 1;
    
    return lines.map((line, index, arr) => (
      <span key={index}>
        {line}
        
        {/* Divisor: aparece após o primeiro elemento (index 0) */}
        {index === 0 && isMultiLine && (
          <span className="block h-[2px] w-8 bg-white mx-auto my-1 rounded-full opacity-70"></span>
        )}
        
        {/* Quebra de linha simples: aparece após o segundo (GADO) e terceiro (SOJA) itens */}
        {/* Usamos index > 0 para pular o item 0, e index < arr.length - 1 para pular o último. */}
        {index > 0 && index < arr.length - 1 && isMultiLine && <br />}

      </span>
    ));
  };
  // FIM DA FUNÇÃO DE FORMATAÇÃO

  // Define a função de clique para o centro
  const handleCentralClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (titulo === "PROJETOS") {
      onSubItemClick("LICITAÇÃO");
    }  
  };

  // VARIÁVEL AUXILIAR: Verifica se o subtítulo "CORPORATIVO" deve ser exibido
  const deveMostrarSubtituloCorporativo = titulo === "PROJETOS" || titulo === "LICITAÇÃO";


  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
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
          // O tamanho (w-78 h-78) da bola central não foi alterado.
          className="w-78 h-78 rounded-full flex flex-col items-center justify-center z-10 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/50"
          onClick={handleCentralClick}
        >
          <h1 className="text-3xl text-center font-bold text-white uppercase tracking-widest px-4">{titulo}</h1>

          {deveMostrarSubtituloCorporativo && (
            <p className="text-xl text-center font-bold uppercase text-yellow-400 mt-2 border-t pt-2 border-yellow-400/50">
              CORPORATIVO
            </p>
          )}

        </motion.div>

        {subItens.map((item, index) => {
          // Garante que a chave de navegação é a correta: 'RASTREABILIDADE / GADO / SOJA / RAÇÃO'
          const proximaChave = item.replace(/\|/g, ' / '); 
          
          const anguloGraus = (index * (360 / subItens.length)) + anguloOffset;
          const anguloRadianos = anguloGraus * (Math.PI / 180);
          const x = raioOrbita * Math.cos(anguloRadianos);
          const y = raioOrbita * Math.sin(anguloRadianos);

          return (
            <motion.div
              key={item}
              variants={itemVariants}
              // REMOVIDO: Classes de tamanho não-padrão (w-38 h-38).
              // MANTIDO: O resto das classes de estilo.
              className="absolute rounded-full flex items-center justify-center text-center bg-slate-900/80 border-2 border-cyan-400 backdrop-blur-md z-10 cursor-pointer p-2"
              // ADICIONADO: Tamanho dinâmico usando a variável 'subItemSize'
              style={{ 
                width: `${subItemSize}px`, 
                height: `${subItemSize}px`, 
                top: `calc(50% + ${y}px)`, 
                left: `calc(50% + ${x}px)`, 
                transform: 'translate(-50%, -50%)' 
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSubItemClick(proximaChave);
              }}
            >
              <span className="text-cyan-300 text-sm font-bold uppercase leading-snug">{formatText(item)}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}