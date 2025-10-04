// components/AnimacaoPaginaSuave.tsx

"use client";

// 1. Importe o tipo 'Variants' da framer-motion
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AnimacaoPaginaSuave({ children }: Props) {
  const pathname = usePathname();

  // 2. Adicione a tipagem explícita aqui -> const variants: Variants
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      filter: 'blur(8px)',
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}