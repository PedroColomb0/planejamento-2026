"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

// Lista de itens para a frente do card (Motivos para ser cliente)
const motivosCliente = [
  "Soluções integradas em um só grupo",
  "Confiança consolidada em diferentes negócios",
  "Benefícios e vantagens exclusivas",
  "Padrão de qualidade garantido",
  "Relacionamento de longo prazo",
  "Cuidado com a conveniência e praticidade",
  "Atendimento personalizado",
  "Redução de riscos e maior segurança",
  "Valorização e reconhecimento do cliente",
  "Crescimento conjunto com o grupo",
];

// ITENS DO VERSO COM A ACENTUAÇÃO CORRIGIDA
const regrasComunicacao = [
  "ANIVERSÁRIO",
  "PLACA DO CARRO",
  "CARTEIRA DE MOTORISTA",
  "SEGURO (CASA, CARRO, VIDA)",
  "REVISÃO DO VEÍCULO",
  "TEST DRIVE",
  "LANÇAMENTO DE PRODUTO",
  "PROMOÇÃO",
  "DIA DO PROFISSIONAL",
  "AGRADECIMENTO POR COMPRA E VENDA",
];

export default function DetalheCliente({ onClose }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede que o clique feche o modal
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="relative w-full max-w-2xl mx-4 cursor-pointer"
        onClick={handleFlip}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* LADO DA FRENTE: 10 Motivos */}
        <motion.div
          className="w-full h-full p-8 bg-slate-900/80 backdrop-blur-lg border-2 border-cyan-500 rounded-2xl shadow-2xl shadow-cyan-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text uppercase tracking-wider">
            10 Motivos para ser nosso cliente
          </h2>
          <ul className="space-y-3">
            {motivosCliente.map((motivo, index) => (
              <li key={index} className="flex items-start text-gray-200">
                <span className="text-cyan-400 font-bold text-lg mr-3">✔</span>
                <span>{motivo}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LADO DE TRÁS: Regras de Comunicação (AMARELO CLARO) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full p-8 bg-slate-900/80 backdrop-blur-lg border-2 border-yellow-300 rounded-2xl shadow-2xl shadow-yellow-300/20"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent bg-clip-text uppercase tracking-wider">
            Réguas de Comunicação
          </h2>
          <ul className="space-y-3">
            {regrasComunicacao.map((regra, index) => (
              <li key={index} className="flex items-start text-gray-200">
                <span className="text-yellow-300 font-bold text-lg mr-3">✔</span>
                <span>{regra}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}