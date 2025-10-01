"use client";

import { motion } from "framer-motion";

export default function PlacaSuperior() {
  return (
    <motion.div
      className="relative flex items-center justify-center 
                 w-80 h-20 
                 cursor-pointer rounded-lg
                 
                 /* Estilo de vidro com borda de neon */
                 bg-slate-900/50 
                 backdrop-blur-md /* <-- ALTERADO PARA UM BLUR MAIS FORTE */
                 border border-cyan-400
                 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
      
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="font-bold text-cyan-300 tracking-widest uppercase">
        Inteligência de Mercado
      </h1>
    </motion.div>
  );
}