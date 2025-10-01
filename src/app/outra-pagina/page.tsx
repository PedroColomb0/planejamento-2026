// outra-pagina/page.tsx

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimacaoOrbital from "@/components/AnimacaoOrbital";
import DetalheItem from "@/components/DetalheItem";
import { dadosHierarquicos } from "@/data/dados"; // IMPORTANTE: Importar os dados

export default function OutraPagina() {
  // ALTERADO: O estado agora é um array que guarda o caminho da navegação (a hierarquia)
  const [hierarquia, setHierarquia] = useState<string[]>([]);

  const labelsInternos = ["MKT", "NPS", "CRM", "EVENTOS", "DADOS", "UX", "BI", "VENDAS"];
  const labelsExternos = ["VEÍCULOS", "ENERGIA", "CONSÓRCIO", "LOCADORA"];

  // Lógica para pegar o item atual e seus subitens
  const itemAtual = hierarquia.length > 0 ? hierarquia[hierarquia.length - 1] : null;
  const subItensAtuais = itemAtual ? dadosHierarquicos[itemAtual] || [] : [];

  // Função para "entrar" em um item
  const handleItemClick = (item: string) => {
    setHierarquia(prev => [...prev, item]);
  };

  // Função para "voltar" um nível
  const handleClose = () => {
    setHierarquia(prev => prev.slice(0, -1));
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {itemAtual ? (
            // Mostra a visão de detalhe se tivermos algo na hierarquia
            <DetalheItem
              key={itemAtual} // A key garante que o componente re-anime ao mudar
              titulo={itemAtual}
              subItens={subItensAtuais}
              onClose={handleClose} // Clicar no fundo volta um nível
              onSubItemClick={handleItemClick} // Clicar num subitem avança um nível
            />
          ) : (
            // Mostra a animação orbital inicial se a hierarquia estiver vazia
            <AnimacaoOrbital
              key="orbital"
              imagemCentral="/robo.png"
              itensOrbitaInterna={labelsInternos}
              itensOrbitaExterna={labelsExternos}
              onItemClick={handleItemClick} // Clicar num item inicia a hierarquia
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}