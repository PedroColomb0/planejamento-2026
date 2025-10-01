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
    const animation = animate(tempo, 360, {
      duration: 60, // AINDA MAIS LENTO: Aumentado de 40 para 60 segundos
      repeat: Infinity,
      ease: "linear",
    });
    return () => animation.stop();
  }, [tempo]);

  const numBolas = itensDaOrbita.length;

  return (
    <div className="relative flex items-center justify-center w-[350px] h-[450px]">
      {/* --- ÍCONE CENTRAL COM EFEITO PULSANTE --- */}
      <motion.div
        className="z-10 flex items-center justify-center w-[100px] h-[100px] rounded-full border border-cyan-400/50"
        animate={{
          boxShadow: [
            "0 0 20px rgba(56, 189, 248, 0.4)",
            "0 0 30px rgba(56, 189, 248, 0.7)",
            "0 0 20px rgba(56, 189, 248, 0.4)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={imagemCentral} width={60} height={60} alt="Ícone Central" />
      </motion.div>

      {/* --- CÁPSULAS DE INFORMAÇÃO ORBITANDO --- */}
      {itensDaOrbita.map((texto, index) => {
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