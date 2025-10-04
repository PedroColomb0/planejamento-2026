"use client";

import { motion, Variants } from "framer-motion";
// import { AnimatePresence, Variants } from "framer-motion"; // REMOVIDO: AnimatePresence
// import { usePathname } from "next/navigation"; // REMOVIDO: usePathname
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AnimacaoPaginaSuave({ children }: Props) {
  // const pathname = usePathname(); // REMOVIDO
  
  // 1. O estado 'exit' não é mais usado, mas mantemos 'hidden' e 'visible'
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, // Aumentei a duração para um efeito mais perceptível no recarregamento
        ease: "easeOut" 
      } 
    },
    // exit: { ... } // REMOVIDO
  };

  return (
    // 2. Removemos o AnimatePresence, pois ele só é necessário para
    // transições de saída quando o roteamento do Next.js está ativo (router.push)
    <motion.div
      // key={pathname} // REMOVIDO
      variants={variants}
      initial="hidden"
      animate="visible"
      // exit="exit" // REMOVIDO
    >
      {children}
    </motion.div>
    // 3. O componente agora funciona apenas como um "wrapper" de animação de entrada (mount)
  );
}