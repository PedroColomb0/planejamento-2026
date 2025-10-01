'use client'; // Necessário para usar hooks como usePathname

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  // Define as animações
  const variants = {
    initialState: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    animateState: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exitState: {
      opacity: 0,
      scale: 1.2,
      filter: 'blur(10px)',
    },
  };

  return (
    // AnimatePresence gerencia a animação de componentes que são removidos da árvore
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // A chave (key) é essencial para o AnimatePresence detectar a mudança de página
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};