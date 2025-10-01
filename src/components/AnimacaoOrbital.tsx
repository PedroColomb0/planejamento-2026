"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  imagemCentral: string;
  itensDaOrbita: string[];
};

export default function AnimacaoOrbital({ imagemCentral, itensDaOrbita }: Props) {
  const raioHorizontal = 150;
  const raioVertical = 200;
  const tempo = useMotionValue(0);

  useEffect(() => {
    // ... (código do useEffect continua o mesmo)
    const animation = animate(tempo, 360, {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    });
    return () => animation.stop();
  }, [tempo]);

  const numBolas = itensDaOrbita.length;

  return (
    <div className="relative flex items-center justify-center w-[350px] h-[450px]">
      
      {/* --- ÍCONE CENTRAL ATUALIZADO --- */}
      <motion.div
        className="z-10"
        // Novo efeito de brilho pulsante usando drop-shadow, que funciona bem em PNGs
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))",
            "drop-shadow(0 0 20px rgba(56, 189, 248, 0.8))",
            "drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))",
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Imagem maior e sem a 'cápsula' de borda */}
        <Image src={imagemCentral} width={120} height={120} alt="Ícone Central" />
      </motion.div>

      {/* --- CÁPSULAS DE INFORMAÇÃO ORBITANDO (código inalterado) --- */}
      {itensDaOrbita.map((texto, index) => {
        // ... (o código de mapeamento das bolas continua exatamente o mesmo)
        const anguloInicial = (index / numBolas) * 360;
        const angulo = useTransform(tempo, (t) => t + anguloInicial);
        const x = useTransform(angulo, (a) => raioHorizontal * Math.cos(a * (Math.PI / 180)));
        const y = useTransform(angulo, (a) => raioVertical * Math.sin(a * (Math.PI / 180)));

        return (
          <motion.div
            key={index}
            style={{ x, y }}
            whileHover={{ scale: 1.1, zIndex: 20,
              boxShadow: "0 0 25px rgba(56, 189, 248, 0.8)" 
            }}
            className="absolute flex items-center justify-center cursor-pointer 
                       w-24 h-24 rounded-full
                       bg-slate-900/50 backdrop-blur-sm 
                       border border-cyan-400
                       shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          >
            <span className="font-bold text-cyan-300 text-sm tracking-widest uppercase">
              {texto}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}