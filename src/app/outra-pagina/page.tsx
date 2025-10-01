"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
// O componente PlacaSuperior não é mais necessário, mas podemos deixar o import caso use no futuro.
import PlacaSuperior from "@/components/PlacaSuperior"; 
import DetalheItem from "@/components/DetalheItem";
// O import do Link não é mais necessário aqui.
// import Link from "next/link"; 

export default function OutraPagina() {
  const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);

  const labelsInternos = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];
  const labelsExternos = ["VEÍCULOS", "ENERGIA", "CONSÓRCIO", "LOCADORA"];

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 overflow-hidden">
      <div className="relative">

        <AnimatePresence mode="wait">
          {itemSelecionado ? (
            <DetalheItem
              key="detalhe"
              titulo={itemSelecionado}
              onClose={() => setItemSelecionado(null)}
            />
          ) : (
            <motion.div key="orbital">
              {/* 1. REMOVIDO: O bloco de código abaixo, que mostrava a PlacaSuperior, foi removido.
              
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-20">
                  <PlacaSuperior />
                </div>
              */}

              <AnimacaoOrbital
                imagemCentral="/robo.png"
                itensOrbitaInterna={labelsInternos}
                itensOrbitaExterna={labelsExternos}
                onItemClick={(item) => setItemSelecionado(item)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. REMOVIDO: O bloco de código que renderizava o botão "Voltar ao Início" foi completamente removido daqui.
        
          {!itemSelecionado && (
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="..."
              >
                Voltar ao Início
              </Link>
            </div>
          )}
        */}
      </div>
    </main>
  );
}