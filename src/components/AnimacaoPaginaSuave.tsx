// components/AnimacaoPaginaSuave.tsx

"use client";

import { motion, Variants, AnimatePresence } from "framer-motion"; // 🔑 Reintroduzido AnimatePresence
import { usePathname } from "next/navigation"; // 🔑 Reintroduzido usePathname
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AnimacaoPaginaSuave({ children }: Props) {
  const pathname = usePathname(); // 🔑 Obtém a rota atual
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      } 
    },
    // 🔑 Reintroduzida a animação de saída (exit)
    exit: { 
        opacity: 0, 
        filter: 'blur(8px)',
        transition: { 
            duration: 0.5, 
            ease: "easeIn" 
        }
    }
  };

  return (
    // 🔑 Envolve o conteúdo com AnimatePresence para lidar com a animação de saída de rota
    <AnimatePresence mode="wait"> 
      <motion.div
        key={pathname} // 🔑 A chave da rota é crucial para AnimatePresence
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit" // 🔑 Aplica a animação de saída
        // Garante que ocupe todo o espaço da tela
        className="w-full h-full min-h-screen" 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}