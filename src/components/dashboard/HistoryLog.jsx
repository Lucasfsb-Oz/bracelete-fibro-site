import React from 'react';
import { ShieldCheck, Calendar, Filter, Clock } from 'lucide-react';

export default function HistoryLog() {
  const historico = [
    { time: "06:00", text: "Início do monitoramento diário. Sinais perfeitamente estáveis." },
    { time: "08:20", text: "Leitura normal dos sensores bioelétricos de condutividade da pele." },
    { time: "10:45", text: "Pequena alteração detectada na tensão muscular. Fadiga muscular sob controle." },
    { time: "12:30", text: "Temperatura corporal levemente elevada (36.9°C), sem alerta crítico." },
    { time: "13:10", text: "Sinais re-estabilizados após período de repouso registrado." },
    { time: "16:00", text: "Maior pico de tensão muscular do dia registrado. Alerta preventivo emitido." },
    { time: "18:15", text: "Monitoramento indicando retorno para nível baixo de risco após relaxamento." },
  ];

  return (
    <section className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-5 sm:p-8 space-y-6">
      
      {/* Header do Histórico */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1d3152] pb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-cyan-400/10 text-cyan-300 rounded-2xl shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Histórico de Eventos</h2>
            <p className="text-[#9fb5d1] text-sm sm:text-base mt-1">
              Registro completo e cronológico das leituras da pulseira inteligente.
            </p>
          </div>
        </div>
        
        {/* Filtros rápidos */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-[#06101f] border border-[#1d3152] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#a5b7d1] hover:bg-[#10264a] hover:text-white transition">
            <Calendar size={16} />
            <span>Hoje</span>
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#06101f] border border-[#1d3152] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#a5b7d1] hover:bg-[#10264a] hover:text-white transition">
            <Filter size={16} />
            <span>Filtrar</span>
          </button>
        </div>
      </div>

      {/* Linha do tempo de Eventos */}
      <div className="space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1d3152]/60">
        {historico.map((item, index) => (
          <div key={index} className="relative pl-12 sm:pl-16 group">
            {/* Timeline Marker */}
            <div className="absolute left-[18px] top-6 h-3.5 w-3.5 rounded-full bg-[#08162b] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition duration-300 z-10" />

            <div className="rounded-2xl bg-[#06101f] border border-[#1d3152] p-5 hover:border-cyan-400/30 transition duration-300 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
              <div className="flex items-center gap-1.5 text-cyan-400 font-extrabold text-lg min-w-[70px]">
                <Clock size={16} className="opacity-70" />
                <span>{item.time}</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
