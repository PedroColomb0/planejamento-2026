// hooks/useWindowSize.ts

"use client";

import { useState, useEffect } from 'react';

// Define a estrutura do objeto que o hook vai retornar
interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  // Inicializa o estado com valores undefined para evitar problemas na renderização inicial no servidor
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Esta função será chamada sempre que a janela for redimensionada
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o "ouvinte" de evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Chama a função uma vez no início para obter o tamanho inicial
    handleResize();

    // Função de limpeza: remove o "ouvinte" quando o componente for desmontado
    // Isso é importante para evitar perdas de memória!
    return () => window.removeEventListener("resize", handleResize);
  }, []); // O array vazio assegura que este efeito só corre uma vez (na montagem e desmontagem)

  return windowSize;
}