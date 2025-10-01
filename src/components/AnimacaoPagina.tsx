"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AnimacaoPagina({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      x: "100%",
      filter: 'blur(10px)', // AJUSTE: Começa desfocado
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)', // AJUSTE: Fica nítido
    },
    exit: {
      opacity: 0,
      x: "-100%",
      filter: 'blur(10px)', // AJUSTE: Fica desfocado ao sair
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
        transition={{ duration: 0.8, ease: "easeInOut" }} // Duração aumentada para o efeito
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}