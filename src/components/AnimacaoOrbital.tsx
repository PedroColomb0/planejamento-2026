"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type BolaProps = {
  texto: string;
  tempo: MotionValue<number>;
  anguloInicial: number;
  raioHorizontal: number;
  raioVertical: number;
  variant: 'inner' | 'outer';
  multiplicadorVelocidade: number;
  onClick?: () => void;
};

type Props = {
  imagemCentral: string;
  itensOrbitaInterna: string[];
  itensOrbitaExterna: string[];
  onItemClick: (item: string) => void;
  tempo: MotionValue<number>;
};

const Bola = ({ texto, tempo, anguloInicial, raioHorizontal, raioVertical, variant, multiplicadorVelocidade, onClick }: BolaProps) => {
  const tempoAjustado = useTransform(tempo, t => t * multiplicadorVelocidade);
  const angulo = useTransform(tempoAjustado, (t) => t + anguloInicial);
  const x = useTransform(angulo, (a) => raioHorizontal * Math.cos(a * (Math.PI / 180)));
  const y = useTransform(angulo, (a) => raioVertical * Math.sin(a * (Math.PI / 180)));

  const innerStyle = "bg-slate-900/50 backdrop-blur-md border border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]";
  const outerStyle = "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/50";
  const styleClasses = variant === 'inner' ? innerStyle : outerStyle;

  const textClasses = variant === 'inner' ? "text-cyan-300" : "text-white";
  const sizeClasses = variant === 'inner' ? "w-20 h-20" : "w-28 h-28";

  return (
    <motion.div
      style={{ x, y }}
      onClick={onClick}
      whileHover={{ scale: 1.1, zIndex: 20, boxShadow: "0 0 25px rgba(56, 189, 248, 0.8)" }}
      className={`absolute flex items-center justify-center cursor-pointer rounded-full ${styleClasses} ${sizeClasses}`}
    >
      <span className={`font-bold text-sm tracking-widest uppercase ${textClasses}`}>{texto}</span>
    </motion.div>
  );
};

export default function AnimacaoOrbital({ imagemCentral, itensOrbitaInterna, itensOrbitaExterna, onItemClick, tempo }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  
  const pistaInterna = { h: 220, v: 290 };
  const pistaExterna = { h: 320, v: 400 };
  const numPontosNaOrbita = itensOrbitaInterna.length;

  if (!isMounted) { return null; }

  return (
    <motion.div 
      className="relative flex items-center justify-center w-[700px] h-[850px]"
      style={{ x: 0 }} 
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <svg className="absolute w-full h-full" style={{ zIndex: 0 }}><ellipse cx="50%" cy="50%" rx={pistaInterna.h} ry={pistaInterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/><ellipse cx="50%" cy="50%" rx={pistaExterna.h} ry={pistaExterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/></svg>
      
      <motion.div className="z-10" animate={{ filter: ["drop-shadow(0 0 10px #06b6d4)", "drop-shadow(0 0 20px #06b6d4)", "drop-shadow(0 0 10px #06b6d4)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        <Image
          src={imagemCentral}
          width={210}
          height={120}
          alt="Ícone Central"
          style={{ height: 'auto' }} // AJUSTE: Adicionado para manter a proporção
        />
      </motion.div>
      
      {Array.from({ length: numPontosNaOrbita }).map((_, index) => {
        const angulo = (index / numPontosNaOrbita) * 360;
        const textoExterno = itensOrbitaExterna[index % itensOrbitaExterna.length];
        return (
          <React.Fragment key={index}>
            <Bola texto={itensOrbitaInterna[index]} tempo={tempo} anguloInicial={angulo} raioHorizontal={pistaInterna.h} raioVertical={pistaInterna.v} variant="inner" multiplicadorVelocidade={1} />
            <Bola texto={textoExterno} tempo={tempo} anguloInicial={angulo} raioHorizontal={pistaExterna.h} raioVertical={pistaExterna.v} variant="outer" multiplicadorVelocidade={0.7} onClick={() => onItemClick(textoExterno)} />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}