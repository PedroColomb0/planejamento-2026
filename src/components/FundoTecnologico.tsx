"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, type Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function FundoTecnologico() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Partículas carregadas!", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      // Otimização 1: Limitar o FPS para 40. 60 é ótimo, mas 40 já é fluido e economiza recursos.
      fpsLimit: 40,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            // Otimização 2: Reduzir a distância da repulsão. Menos partículas serão afetadas pelo mouse.
            distance: 80,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#00bfff", // Deep Sky Blue
        },
        shadow: {
          enable: true,
          color: "#00bfff",
          // Otimização 3: Reduzir o blur do brilho. Efeitos de blur são custosos para o navegador.
          blur: 5,
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          // Otimização 4: Deixar as linhas um pouco mais sutis para diminuir o impacto visual e de processamento.
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          // Otimização 5: A MAIS IMPORTANTE! Reduzir o número de partículas.
          // Menos partículas = menos cálculos = mais performance.
          value: 80,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          // Otimização 6: Diminuir o tamanho máximo das partículas.
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    );
  }

  return <></>;
}