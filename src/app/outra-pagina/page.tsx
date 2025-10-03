// outra-pagina.tsx (Código com a posição corrigida)

"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";
import DetalheCliente from "@/components/DetalheCliente";
import { dadosHierarquicos } from "@/data/dados";

export default function OutraPagina() {
  const [hierarquia, setHierarquia] = useState<string[]>([]);
  const [mostrarDetalheCliente, setMostrarDetalheCliente] = useState(false);
  const tempoAnimacao = useRef(useMotionValue(0)).current;

  useEffect(() => {
    const animation = animate(tempoAnimacao, 360, {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    });
    return () => animation.stop();
  }, [tempoAnimacao]);

  const labelsInternos = ["MARKETING", "CRM", "APLICATIVO", "EVENTOS", "CAMPANHAS", "SITE", "LEAD", "WHATSAPP"];
  const labelsExternos = ["AGRONEGÓCIOS", "VEÍCULOS PESADOS", "LICITAÇÃO", "VEÍCULOS LEVES", "FINANCEIRO", "ENERGIA", "PROJETOS"];
  
  const itemAtual = hierarquia.length > 0 ? hierarquia[hierarquia.length - 1] : null;
  const subItensAtuais = itemAtual ? dadosHierarquicos[itemAtual] || [] : [];

  const handleItemClick = (item: string) => {
    setHierarquia(prev => [...prev, item]);
  };

  const handleClose = () => {
    setHierarquia(prev => prev.slice(0, -1));
  };

  const handleCentroClick = () => setMostrarDetalheCliente(true);
  const handleCloseDetalheCliente = () => setMostrarDetalheCliente(false);

  return (
    <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      
      {/* --- INÍCIO DA ALTERAÇÃO --- */}

      {/* 1. Imagem da cabeça na sua posição original exata. */}
      <div className="absolute top-52 left-40 z-10 w-[280px] animate-head-beat-slow">
        <Image src="/circulo-cabeca.png" alt="Gráfico de um rosto" width={800} height={800} style={{ objectFit: 'contain' }} />
      </div>

      {/* 2. Texto posicionado logo abaixo da imagem, alinhado com ela. */}
      <div className="absolute top-115 left-40 z-10 w-[280px] text-white text-center">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider text-shadow-lg">
          DO DESAFIO À <br /> OPORTUNIDADE
        </h1>
      </div>
      
      {/* --- FIM DA ALTERAÇÃO --- */}

      {/* Logo movido para baixo e para a direita */}
      <div className="absolute bottom-8 right-8 z-10 w-[240px]">
        <Image src="/Grupo Rovema.png" alt="Logo do Grupo Rovema" width={240} height={66} style={{ objectFit: 'contain' }} />
      </div>

      <div className="relative w-full h-full flex items-center justify-center z-20">
        
        {/* Wrapper que controla a visibilidade da Animação Orbital */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: itemAtual || mostrarDetalheCliente ? 0 : 1,
            scale: itemAtual || mostrarDetalheCliente ? 0.9 : 1,
            pointerEvents: itemAtual || mostrarDetalheCliente ? 'none' : 'auto',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <AnimacaoOrbital
            imagemCentral="/robo.png"
            itensOrbitaInterna={labelsInternos} 
            itensOrbitaExterna={labelsExternos}
            onItemClick={handleItemClick}
            onCentroClick={handleCentroClick}
            tempo={tempoAnimacao}
          />
        </motion.div>

        {/* AnimatePresence para o DetalheItem (navegação) */}
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
        
        {/* AnimatePresence para o DetalheCliente */}
        <AnimatePresence>
          {mostrarDetalheCliente && (
            <DetalheCliente onClose={handleCloseDetalheCliente} />
          )}
        </AnimatePresence>
        
      </div>
    </main>
  );
}