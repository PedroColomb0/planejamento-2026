// components/AnimacaoOrbital.tsx (Código completo com o ajuste)

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
  onCentroClick: () => void;
};

const Bola = ({ texto, tempo, anguloInicial, raioHorizontal, raioVertical, variant, multiplicadorVelocidade, onClick }: BolaProps) => {
  const tempoAjustado = useTransform(tempo, t => t * multiplicadorVelocidade);
  const angulo = useTransform(tempoAjustado, (t) => t + anguloInicial);
  const x = useTransform(angulo, (a) => raioHorizontal * Math.cos(a * (Math.PI / 180)));
  const y = useTransform(angulo, (a) => raioVertical * Math.sin(a * (Math.PI / 180)));

  const innerStyle = "bg-slate-900/50 backdrop-blur-md border border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]";
  const outerStyle = "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/50";
  const styleClasses = variant === 'inner' ? innerStyle : outerStyle;
  
  // Mantemos a bola em w-28 h-28
  const sizeClasses = variant === 'inner' ? "w-28 h-28" : "w-32 h-32"; 
  
  // AUMENTADO AQUI: De 'text-xs' para 'text-sm'
  const spanClasses = variant === 'outer' ? "font-bold text-sm uppercase text-center leading-tight p-1" :
                        "font-semibold text-sm tracking-wider uppercase text-center p-1"; 

  return (
    <motion.div
      style={{ x, y }}
      onClick={onClick}
      whileHover={{ scale: 1.1, zIndex: 20, boxShadow: "0 0 25px rgba(56, 189, 248, 0.8)" }}
      className={`absolute flex items-center justify-center cursor-pointer rounded-full ${styleClasses} ${sizeClasses}`}
    >
      <span className={spanClasses}>{texto}</span>
    </motion.div>
  );
};

export default function AnimacaoOrbital({ imagemCentral, itensOrbitaInterna, itensOrbitaExterna, onItemClick, tempo, onCentroClick }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  
  const pistaInterna = { h: 330, v: 285 };
  const pistaExterna = { h: 550, v: 400 };
  
  const angulosOrbitaExterna = Array.from({ length: 6 }, (_, i) => i * 60); 

  if (!isMounted) { return null; }

  return (
    <motion.div 
      className="relative flex items-center justify-center w-[900px] h-[1000px]"
      style={{ x: 0 }} 
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
        <ellipse cx="50%" cy="50%" rx={pistaInterna.h} ry={pistaInterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/>
        <ellipse cx="50%" cy="50%" rx={pistaExterna.h} ry={pistaExterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/>
      </svg>
      
      <motion.div 
        className="z-10 flex flex-col items-center justify-center -translate-y-2"
        onClick={onCentroClick}
        animate={{ filter: ["drop-shadow(0 0 10px #06b6d4)", "drop-shadow(0 0 20px #06b6d4)", "drop-shadow(0 0 10px #06b6d4)"] }} 
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={imagemCentral}
          width={250}
          height={140}
          alt="Ícone Central"
          style={{ height: 'auto' }}
        />
        <span className="mt-2 text-xl font-extrabold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">
          CLIENTE
        </span>
      </motion.div>
      
      {/* Renderização da Órbita Interna */}
      {Array.from({ length: itensOrbitaInterna.length }).map((_, index) => {
        const angulo = (index / itensOrbitaInterna.length) * 360;
        return (
          <Bola 
            key={`inner-${itensOrbitaInterna[index]}`}
            texto={itensOrbitaInterna[index]} 
            tempo={tempo} 
            anguloInicial={angulo} 
            raioHorizontal={pistaInterna.h} 
            raioVertical={pistaInterna.v} 
            variant="inner" 
            multiplicadorVelocidade={1}
            onClick={() => onItemClick(itensOrbitaInterna[index])} 
          />
        );
      })}

      {/* Renderização da Órbita Externa */}
      {Array.from({ length: itensOrbitaExterna.length }).map((_, index) => {
        const angulo = angulosOrbitaExterna[index % angulosOrbitaExterna.length];
        const textoExterno = itensOrbitaExterna[index];

        const handleClick = () => {
          if (textoExterno === "CORPORATIVO") {
            onItemClick("PROJETOS");
          } else {
            onItemClick(textoExterno);
          }
        };

        return (
          <Bola 
            key={`outer-${textoExterno}`}
            texto={textoExterno} 
            tempo={tempo} 
            anguloInicial={angulo} 
            raioHorizontal={pistaExterna.h} 
            raioVertical={pistaExterna.v} 
            variant="outer" 
            multiplicadorVelocidade={0}
            onClick={handleClick}
          />
        );
      })}
    </motion.div>
  );
}