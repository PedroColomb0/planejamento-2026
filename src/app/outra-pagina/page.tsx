"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";

export default function OutraPagina() {
  const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);

  const labelsInternos = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];
  const labelsExternos = ["VEÍCULOS", "ENERGIA", "CONSÓRCIO", "LOCADORA"];

  return (
    // VOLTAMOS PARA O ORIGINAL: 'items-center justify-center' para centralizar tudo.
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
              <AnimacaoOrbital
                imagemCentral="/robo.png"
                itensOrbitaInterna={labelsInternos}
                itensOrbitaExterna={labelsExternos}
                onItemClick={(item) => setItemSelecionado(item)}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}