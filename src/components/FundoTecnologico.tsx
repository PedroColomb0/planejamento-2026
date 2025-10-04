// components/FundoTecnologico.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, type Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function FundoTecnologico() {
  const [init, setInit] = useState(false);
  const [visible, setVisible] = useState(false); // <-- 1. NOVO ESTADO DE VISIBILIDADE

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
      // <-- 2. ATRASO PARA RENDERIZAR
      // Após a inicialização, esperamos 500ms para tornar as partículas visíveis.
      // Isso dá tempo para o conteúdo principal da página carregar primeiro.
      const timer = setTimeout(() => {
        setVisible(true);
      }, 500);

      // Limpa o timer se o componente for desmontado antes do tempo
      return () => clearTimeout(timer);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Partículas carregadas!", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // ... (o resto das suas opções continua exatamente igual) ...
      background: { color: { value: "transparent" } },
      fpsLimit: 40,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 80, duration: 0.4 } },
      },
      particles: {
        color: { value: "#00bfff" },
        shadow: { enable: true, color: "#00bfff", blur: 5 },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  // <-- 3. CONDIÇÃO DE RENDERIZAÇÃO ATUALIZADA
  // As partículas só serão renderizadas se 'init' e 'visible' forem verdadeiros.
  if (init && visible) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    );
  }

  return <></>; // Retorna nulo enquanto não estiver pronto
}