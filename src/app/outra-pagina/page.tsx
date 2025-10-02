// outra-pagina.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";
import { dadosHierarquicos } from "@/data/dados";

export default function OutraPagina() {
  const [hierarquia, setHierarquia] = useState<string[]>([]);
  const tempoAnimacao = useRef(useMotionValue(0)).current;

  useEffect(() => {
    const animation = animate(tempoAnimacao, 360, {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    });
    return () => animation.stop();
  }, [tempoAnimacao]);

  // Os 8 rótulos para a órbita interna
  const labelsInternos = ["MARKETING", "CRM", "APLICATIVO", "EVENTOS", "CAMPANHAS", "SITE", "LEAD", "WHATSAPP"]; 
  
  // Os 7 rótulos para a órbita externa
  const labelsExternos = ["AGRONEGÓCIOS", "VEÍCULOS PESADOS", "LICITAÇÃO", "VEICULOS LEVES", "FINANCEIRO", "ENERGIA", "PROJETOS"];
  
  const itemAtual = hierarquia.length > 0 ? hierarquia[hierarquia.length - 1] : null;
  const subItensAtuais = itemAtual ? dadosHierarquicos[itemAtual] || [] : [];

  const handleItemClick = (item: string) => {
    setHierarquia(prev => [...prev, item]);
  };

  const handleClose = () => {
    setHierarquia(prev => prev.slice(0, -1));
  };

  return (
    <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Imagens de fundo */}
      <div className="absolute top-52 left-50 z-10 w-[280px] animate-head-beat-slow">
        <Image src="/circulo-cabeca.png" alt="Gráfico de um rosto" width={800} height={800} style={{ objectFit: 'contain' }} />
      </div>
      <div className="absolute top-120 left-55 z-10 w-[280px]">
        <Image src="/Grupo Rovema.png" alt="Logo do Grupo Rovema" width={240} height={66} style={{ objectFit: 'contain' }} />
      </div>

      {/* Conteúdo Interativo */}
      <div className="relative w-full h-full flex items-center justify-center z-20">
        
        {/* Wrapper que controla a visibilidade da Animação Orbital */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: itemAtual ? 0 : 1,
            scale: itemAtual ? 0.9 : 1,
            pointerEvents: itemAtual ? 'none' : 'auto',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <AnimacaoOrbital
            imagemCentral="/robo.png"
            itensOrbitaInterna={labelsInternos} 
            itensOrbitaExterna={labelsExternos}
            onItemClick={handleItemClick}
            tempo={tempoAnimacao}
          />
        </motion.div>

        {/* AnimatePresence para controlar a entrada e saída do DetalheItem */}
        <AnimatePresence>
          {itemAtual && (
            <DetalheItem
              key={itemAtual}
              titulo={itemAtual}
              subItens={subItensAtuais}
              onClose={handleClose}
              onSubItemClick={handleItemClick}
            />
          )}
        </AnimatePresence>
        
      </div>
    </main>
  );
}