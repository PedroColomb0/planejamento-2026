// outra-pagina.tsx (Código completo atualizado)

"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";
import DetalheCliente from "@/components/DetalheCliente"; // <-- 1. IMPORTAR O NOVO COMPONENTE
import { dadosHierarquicos } from "@/data/dados";

export default function OutraPagina() {
  const [hierarquia, setHierarquia] = useState<string[]>([]);
  const [mostrarDetalheCliente, setMostrarDetalheCliente] = useState(false); // <-- 2. ADICIONAR NOVO ESTADO
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

  // <-- 3. FUNÇÕES PARA ABRIR E FECHAR O NOVO MODAL
  const handleCentroClick = () => setMostrarDetalheCliente(true);
  const handleCloseDetalheCliente = () => setMostrarDetalheCliente(false);


  return (
    <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Imagens de fundo */}
      <div className="absolute top-52 left-50 z-10 w-[280px] animate-head-beat-slow">
        <Image src="/circulo-cabeca.png" alt="Gráfico de um rosto" width={800} height={800} style={{ objectFit: 'contain' }} />
      </div>
      <div className="absolute top-120 left-55 z-10 w-[280px]">
        <Image src="/Grupo Rovema.png" alt="Logo do Grupo Rovema" width={240} height={66} style={{ objectFit: 'contain' }} />
      </div>

      <div className="relative w-full h-full flex items-center justify-center z-20">
        
        {/* Wrapper que controla a visibilidade da Animação Orbital */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            // <-- 4. ATUALIZAR LÓGICA DE VISIBILIDADE
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
            onCentroClick={handleCentroClick} // <-- 5. PASSAR A NOVA FUNÇÃO
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
        
        {/* <-- 6. ADICIONAR O NOVO COMPONENTE COM AnimatePresence */}
        <AnimatePresence>
          {mostrarDetalheCliente && (
            <DetalheCliente onClose={handleCloseDetalheCliente} />
          )}
        </AnimatePresence>
        
      </div>
    </main>
  );
}