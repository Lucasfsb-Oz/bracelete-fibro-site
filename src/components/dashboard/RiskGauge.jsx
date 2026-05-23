import React from 'react';

export default function RiskGauge({ value = 38 }) {
  // O ângulo do arco vai de 180 graus (esquerda) até 0 graus (direita)
  // Mapeamos o valor (0 a 100) para o ângulo
  const angle = 180 - (value / 100) * 180;
  const angleRad = (Math.PI * angle) / 180;
  const needleLength = 70;
  const cx = 120;
  const cy = 110;
  const targetX = cx + needleLength * Math.cos(angleRad);
  const targetY = cy - needleLength * Math.sin(angleRad);

  return (
    <div className="relative flex justify-center items-center">
      <svg viewBox="0 0 240 130" className="w-full h-32 max-w-[200px]">
        {/* Trilho base */}
        <path d="M35 110 A85 85 0 0 1 205 110" fill="none" stroke="#1d2d44" strokeWidth="16" strokeLinecap="round" />
        {/* Faixas coloridas */}
        <path d="M35 110 A85 85 0 0 1 80 38" fill="none" stroke="#10b981" strokeWidth="16" strokeLinecap="round" />
        <path d="M80 38 A85 85 0 0 1 150 38" fill="none" stroke="#fecdd3" strokeWidth="16" /> {/* Correção de sobreposição */}
        <path d="M80 38 A85 85 0 0 1 150 38" fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" />
        <path d="M150 38 A85 85 0 0 1 205 110" fill="none" stroke="#f97316" strokeWidth="16" strokeLinecap="round" />
        <path d="M190 82 A85 85 0 0 1 205 110" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
        
        {/* Agulha de medição */}
        <circle cx={cx} cy={cy} r="8" fill="#f8fafc" />
        <line x1={cx} y1={cy} x2={targetX} y2={targetY} stroke="#f8fafc" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
