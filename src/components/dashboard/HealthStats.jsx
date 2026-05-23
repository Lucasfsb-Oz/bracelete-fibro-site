import React from 'react';
import { Activity, Thermometer, Zap } from 'lucide-react';

export default function HealthStats() {
  return (
    <section className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-5 sm:p-7 space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Evolução dos Sinais Corporais</h2>
        <p className="text-[#9fb5d1] text-sm sm:text-base">
          Acompanhamento dinâmico em tempo real dos sensores bioelétricos, tensão muscular e temperatura da pele.
        </p>
      </div>

      {/* Gráfico Detalhado */}
      <div className="relative h-80 rounded-2xl bg-[#06101f] border border-[#1d3152] p-4 sm:p-6">
        <svg viewBox="0 0 900 280" className="w-full h-full">
          {/* Linhas de grade horizontal */}
          {[40, 90, 140, 190, 240].map((y) => (
            <line key={y} x1="60" y1={y} x2="860" y2={y} stroke="#17263d" strokeDasharray="5 5" />
          ))}
          {/* Eixo Y */}
          <line x1="60" y1="30" x2="60" y2="245" stroke="#2a3d58" strokeWidth="1.5" />
          
          {/* Linha de Dados (Tensão Muscular) */}
          <polyline 
            points="60,110 190,105 320,118 450,95 580,132 710,104 840,120" 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
          {/* Gradiente da área sob a linha */}
          <polygon 
            points="60,110 190,105 320,118 450,95 580,132 710,104 840,120 840,245 60,245" 
            fill="url(#blue-gradient)" 
            opacity="0.15" 
          />

          {/* Pontos de dados */}
          {["60,110", "190,105", "320,118", "450,95", "580,132", "710,104", "840,120"].map((point, i) => {
            const [cx, cy] = point.split(",");
            return <circle key={i} cx={cx} cy={cy} r="6" fill="#60a5fa" className="cursor-pointer hover:r-8 transition duration-200" />;
          })}

          <defs>
            <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06101f" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Rótulos do Eixo Y */}
          <text x="35" y="45" fill="#8198b8" fontSize="14" fontWeight="bold">100</text>
          <text x="40" y="95" fill="#8198b8" fontSize="14" fontWeight="bold">75</text>
          <text x="40" y="145" fill="#8198b8" fontSize="14" fontWeight="bold">50</text>
          <text x="40" y="195" fill="#8198b8" fontSize="14" fontWeight="bold">25</text>
          <text x="48" y="245" fill="#8198b8" fontSize="14" fontWeight="bold">0</text>
          
          {/* Rótulos do Eixo X */}
          <text x="60" y="270" fill="#8198b8" fontSize="14" fontWeight="bold">08h</text>
          <text x="310" y="270" fill="#8198b8" fontSize="14" fontWeight="bold">12h</text>
          <text x="570" y="270" fill="#8198b8" fontSize="14" fontWeight="bold">16h</text>
          <text x="820" y="270" fill="#8198b8" fontSize="14" fontWeight="bold">20h</text>
        </svg>
      </div>

      {/* Grid de Métricas Analíticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricDetailCard 
          title="Maior Tensão" 
          value="76" 
          unit="/100" 
          icon={<Zap size={24} />} 
          color="blue" 
          detail="Registrada às 16:00"
        />
        <MetricDetailCard 
          title="Sinal Médio" 
          value="72" 
          unit="/100" 
          icon={<Activity size={24} />} 
          color="green" 
          detail="Leitura bioelétrica estável"
        />
        <MetricDetailCard 
          title="Temperatura Média" 
          value="36.7" 
          unit="°C" 
          icon={<Thermometer size={24} />} 
          color="red" 
          detail="Variação de 0.2°C nas últimas 4h"
        />
      </div>
    </section>
  );
}

function MetricDetailCard({ title, value, unit, icon, color, detail }) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    red: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
  };

  return (
    <div className="rounded-2xl bg-[#06101f] border border-[#1d3152] p-6 relative flex flex-col justify-between hover:border-[#3b82f6]/40 transition duration-300">
      <div>
        <p className="text-[#9fb5d1] text-sm font-semibold uppercase tracking-wider">{title}</p>
        <p className="mt-4 text-4xl font-extrabold text-white">
          {value} <span className="text-xl text-[#9fb5d1] font-medium">{unit}</span>
        </p>
      </div>
      <p className="mt-4 text-xs text-[#8198b8] font-medium">{detail}</p>
      <div className={`absolute top-6 right-6 h-12 w-12 rounded-xl flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
    </div>
  );
}
