// src/components/ClientFundoWrapper.tsx

"use client"; // 🔑 ESSENCIAL: Transforma este em um Client Component

import dynamic from 'next/dynamic';

// 1. Carregamento Dinâmico MOVIDO PARA CÁ
// Agora podemos usar ssr: false com segurança, pois este componente é 'client-side'.
const DynamicFundoTecnologico = dynamic(
  () => import('./FundoTecnologico'),
  { ssr: false }
);

export default function ClientFundoWrapper() {
  return (
    // 2. Apenas renderizamos o componente dinâmico
    <DynamicFundoTecnologico />
  );
}