// outra-pagina/page.tsx

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";
import { dadosHierarquicos } from "@/data/dados";

export default function OutraPagina() {
  const [hierarquia, setHierarquia] = useState<string[]>([]);

  const labelsInternos = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];
  const labelsExternos = ["VEÍCULOS", "ENERGIA", "CONSÓRCIO", "LOCADORA"];

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

        {/* =================================================================== */}
        {/* ========= CONTROLE INDEPENDENTE DAS IMAGENS DE FUNDO ========== */}
        {/* =================================================================== */}

        {/* --- IMAGEM 1: CABEÇA --- */}
        {/* Altere 'top-20' e 'left-20' para mover esta imagem. */}
        <div className="absolute top-52 left-55 z-10 w-[280px] animate-head-beat-slow">
            <Image
                src="/circulo-cabeca.png"
                alt="Gráfico de um rosto com ícones de tecnologia"
                width={800}
                height={800}
                style={{ objectFit: 'contain' }}
            />
        </div>

        {/* --- IMAGEM 2: LOGO GRUPO ROVEMA --- */}
        {/* Altere 'top-80' e 'left-24' para mover esta imagem. */}
        {/* 'top-80' é um valor alto para colocá-la mais para baixo. */}
        <div className="absolute top-120 left-60 z-10 w-[280px]">
            <Image
                src="/Grupo Rovema.png"
                alt="Logo do Grupo Rovema"
                width={240}
                height={66}
                style={{ objectFit: 'contain' }}
            />
        </div>


        {/* CAMADA DA FRENTE (Z-20): Conteúdo Interativo (permanece igual) */}
        <div className="relative w-full h-full flex items-center justify-center z-20">
            <AnimatePresence mode="wait">
                {itemAtual ? (
                    <DetalheItem
                        key={itemAtual}
                        titulo={itemAtual}
                        subItens={subItensAtuais}
                        onClose={handleClose}
                        onSubItemClick={handleItemClick}
                    />
                ) : (
                    <AnimacaoOrbital
                        key="orbital"
                        imagemCentral="/robo.png"
                        itensOrbitaInterna={labelsInternos}
                        itensOrbitaExterna={labelsExternos}
                        onItemClick={handleItemClick}
                    />
                )}
            </AnimatePresence>
        </div>
    </main>
  );
}