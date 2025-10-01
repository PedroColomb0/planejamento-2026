"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
  itens: string[];
  raioHorizontal: number;
  raioVertical: number;
  tempo: MotionValue<number>; // Recebe o "motor" de tempo do componente pai
  multiplicadorVelocidade?: number; // Para controlar a velocidade relativa
};

export default function Orbita({
  itens,
  raioHorizontal,
  raioVertical,
  tempo,
  multiplicadorVelocidade = 1, // Velocidade padrão
}: Props) {
  const numBolas = itens.length;

  return (
    <>
      {itens.map((texto, index) => {
        const anguloInicial = (index / numBolas) * 360;

        // Usamos o multiplicador para ajustar a velocidade desta órbita específica
        const tempoAjustado = useTransform(tempo, (t) => t * multiplicadorVelocidade);
        const angulo = useTransform(tempoAjustado, (t) => t + anguloInicial);
        
        const x = useTransform(angulo, (a) => raioHorizontal * Math.cos(a * (Math.PI / 180)));
        const y = useTransform(angulo, (a) => raioVertical * Math.sin(a * (Math.PI / 180)));

        return (
          <motion.div
            key={index}
            style={{ x, y }}
            whileHover={{ scale: 1.1, zIndex: 20, boxShadow: "0 0 25px rgba(56, 189, 248, 0.8)" }}
            className="absolute flex items-center justify-center cursor-pointer 
                       w-24 h-24 rounded-full
                       bg-slate-900/50 backdrop-blur-md 
                       border border-cyan-400
                       shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          >
            <span className="font-bold text-cyan-300 text-sm tracking-widest uppercase">
              {texto}
            </span>
          </motion.div>
        );
      })}
    </>
  );
}