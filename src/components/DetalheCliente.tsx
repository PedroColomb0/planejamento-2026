// components/DetalheCliente.tsx

"use client";

import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

const motivos = [
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

export default function DetalheCliente({ onClose }: Props) {
  return (
    // Container principal que ocupa a tela toda para capturar o clique "fora"
    <motion.div
      // MUDANÇA AQUI: Removido o "bg-black/30" para o fundo ficar transparente
      className="fixed inset-0 z-40 flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Container do conteúdo que impede que o clique "vaze" para o fundo */}
      <motion.div
        className="w-full max-w-2xl p-8 mx-4 bg-slate-900/80 backdrop-blur-lg border-2 border-cyan-500 rounded-2xl shadow-2xl shadow-cyan-500/20"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text uppercase tracking-wider">
          10 Motivos para ser nosso cliente
        </h2>
        <ul className="space-y-3">
          {motivos.map((motivo, index) => (
            <li key={index} className="flex items-start text-gray-200">
              <span className="text-cyan-400 font-bold text-lg mr-3">✔</span>
              <span>{motivo}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}