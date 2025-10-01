"use client";

import { motion, useMotionValue, useTransform, animate, MotionValue } from "framer-motion";
import React, { useEffect, useState } from "react"; // Adicionado React para usar React.Fragment
import Image from "next/image";

// Definição de tipos para as props do componente Bola
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

// Definição de tipos para as props do componente principal
type Props = {
  imagemCentral: string;
  itensOrbitaInterna: string[];
  itensOrbitaExterna: string[];
  onItemClick: (item: string) => void;
};

/**
 * Componente Bola: Representa cada item individual em órbita.
 * Calcula sua própria posição (x, y) com base no tempo global da animação.
 */
const Bola = ({ texto, tempo, anguloInicial, raioHorizontal, raioVertical, variant, multiplicadorVelocidade, onClick }: BolaProps) => {
  // Ajusta a velocidade da animação para esta bola específica
  const tempoAjustado = useTransform(tempo, t => t * multiplicadorVelocidade);
  // Calcula o ângulo atual da bola na órbita
  const angulo = useTransform(tempoAjustado, (t) => t + anguloInicial);
  // Usa trigonometria para encontrar as coordenadas X e Y na elipse
  const x = useTransform(angulo, (a) => raioHorizontal * Math.cos(a * (Math.PI / 180)));
  const y = useTransform(angulo, (a) => raioVertical * Math.sin(a * (Math.PI / 180)));

  // Estilos condicionais baseados na variante (órbita interna ou externa)
  const styleClasses = variant === 'inner' ? "bg-slate-900/50 backdrop-blur-md border border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]" : "bg-cyan-500 shadow-lg shadow-cyan-500/50";
  const textClasses = variant === 'inner' ? "text-cyan-300" : "text-white";

  return (
    <motion.div
      style={{ x, y }}
      onClick={onClick}
      whileHover={{ scale: 1.1, zIndex: 20, boxShadow: "0 0 25px rgba(56, 189, 248, 0.8)" }}
      className={`absolute flex items-center justify-center cursor-pointer w-24 h-24 rounded-full ${styleClasses}`}
    >
      <span className={`font-bold text-sm tracking-widest uppercase ${textClasses}`}>{texto}</span>
    </motion.div>
  );
};

/**
 * Componente AnimacaoOrbital: O container principal que orquestra toda a animação.
 * Controla o tempo, renderiza as órbitas, a imagem central e todas as Bolas.
 */
export default function AnimacaoOrbital({ imagemCentral, itensOrbitaInterna, itensOrbitaExterna, onItemClick }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  
  // MotionValue para controlar o progresso da animação de 0 a 360 (graus)
  const tempo = useMotionValue(0);
  useEffect(() => {
    const animation = animate(tempo, 360, { duration: 60, repeat: Infinity, ease: "linear" });
    return () => animation.stop();
  }, [tempo]);

  // Define o tamanho dos raios horizontal e vertical para cada órbita
  const pistaInterna = { h: 220, v: 290 };
  const pistaExterna = { h: 320, v: 400 };
  const numPontosNaOrbita = itensOrbitaInterna.length;

  // Evita problemas de hidratação com Next.js, renderizando apenas no cliente
  if (!isMounted) { return null; }

  return (
    // AJUSTE 1: A propriedade 'x: -150' desloca toda a animação para a esquerda na página.
    <motion.div 
      className="relative flex items-center justify-center w-[700px] h-[850px]"
      style={{ x: 0 }} 
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {/* SVG que desenha as linhas pontilhadas das órbitas elípticas */}
      <svg className="absolute w-full h-full" style={{ zIndex: 0 }}><ellipse cx="50%" cy="50%" rx={pistaInterna.h} ry={pistaInterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/><ellipse cx="50%" cy="50%" rx={pistaExterna.h} ry={pistaExterna.v} fill="none" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 10"/></svg>
      
      {/* Imagem central com animação de brilho */}
      <motion.div className="z-10" animate={{ filter: ["drop-shadow(0 0 10px #06b6d4)", "drop-shadow(0 0 20px #06b6d4)", "drop-shadow(0 0 10px #06b6d4)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        <Image src={imagemCentral} width={210} height={120} alt="Ícone Central" />
      </motion.div>
      
      {/* Mapeia os arrays de itens para criar as Bolas em órbita */}
      {Array.from({ length: numPontosNaOrbita }).map((_, index) => {
        const angulo = (index / numPontosNaOrbita) * 360;
        const textoExterno = itensOrbitaExterna[index % itensOrbitaExterna.length];
        return (
          // AJUSTE 2: Usamos React.Fragment para corrigir o problema de alinhamento.
          // Isso agrupa os componentes Bola sem criar um <div> extra que interferia
          // com o layout do Flexbox, garantindo o alinhamento central perfeito.
          <React.Fragment key={index}>
            <Bola texto={itensOrbitaInterna[index]} tempo={tempo} anguloInicial={angulo} raioHorizontal={pistaInterna.h} raioVertical={pistaInterna.v} variant="inner" multiplicadorVelocidade={1} />
            <Bola texto={textoExterno} tempo={tempo} anguloInicial={angulo} raioHorizontal={pistaExterna.h} raioVertical={pistaExterna.v} variant="outer" multiplicadorVelocidade={0.7} onClick={() => onItemClick(textoExterno)} />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}