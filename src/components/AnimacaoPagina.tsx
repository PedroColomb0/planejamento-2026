// components/AnimacaoPagina.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AnimacaoPagina({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      x: "100%", // Começa fora da tela, à direita
    },
    animate: {
      opacity: 1,
      x: 0, // Anima para a posição final (centro)
    },
    exit: {
      opacity: 0,
      x: "-100%", // Sai da tela, para a esquerda
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}