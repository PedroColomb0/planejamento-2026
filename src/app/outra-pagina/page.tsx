"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import PlacaSuperior from "@/components/PlacaSuperior";
import DetalheItem from "@/components/DetalheItem";
import Link from "next/link"; // Re-adicionado o Link para o botão de voltar

export default function OutraPagina() {
  const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);

  const labelsInternos = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];
  const labelsExternos = ["VEÍCULOS", "ENERGIA", "CONSÓRCIO", "LOCADORA"];

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 overflow-hidden">
      <div className="relative">

        {/* AnimatePresence gerencia a animação de entrada e saída dos componentes */}
        <AnimatePresence mode="wait">
          {itemSelecionado ? (
            // Se um item estiver selecionado, mostra APENAS a tela de detalhes
            <DetalheItem
              key="detalhe"
              titulo={itemSelecionado}
              onClose={() => setItemSelecionado(null)}
            />
          ) : (
            // Se não, mostra a animação orbital E a placa superior
            <motion.div key="orbital">
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-20">
                <PlacaSuperior />
              </div>

              <AnimacaoOrbital
                imagemCentral="/robo.png"
                itensOrbitaInterna={labelsInternos}
                itensOrbitaExterna={labelsExternos}
                onItemClick={(item) => setItemSelecionado(item)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão de voltar fica visível apenas na tela principal */}
        {!itemSelecionado && (
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg
                         hover:bg-cyan-400 transition-colors duration-300"
            >
              Voltar ao Início
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}