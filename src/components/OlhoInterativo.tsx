"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./OlhoInterativo.module.css";

const OlhoInterativo: React.FC = () => {
  const olhoRef = useRef<HTMLDivElement>(null);
  const [estiloPupila, setEstiloPupila] = useState({});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!olhoRef.current) return;

      const rect = olhoRef.current.getBoundingClientRect();
      const olhoX = rect.left + rect.width / 2;
      const olhoY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const angulo = Math.atan2(mouseY - olhoY, mouseX - olhoX);
      
      // Distância de movimento da pupila dentro da íris de 15px.
      // Um valor pequeno para manter o movimento sutil e dentro dos limites.
      const maxDistancia = 3; 

      const pupilaX = Math.cos(angulo) * maxDistancia;
      const pupilaY = Math.sin(angulo) * maxDistancia;

      setEstiloPupila({
        transform: `translate(${pupilaX}px, ${pupilaY}px)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Usamos a estrutura completa do olho estilizado
  return (
    <div ref={olhoRef} className={styles.irisContainer}>
      <div className={styles.iris}>
        <motion.div
          className={styles.pupilWrapper}
          style={estiloPupila}
          transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
        >
          <div className={styles.pupil}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default OlhoInterativo;