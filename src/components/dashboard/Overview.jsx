import React from 'react';
import DashboardCard from '../ui/DashboardCard';
import PainChart from './PainChart';
import MetricRow from '../ui/MetricRow';
import RiskGauge from './RiskGauge';
import { ShieldAlert, Info, Sparkles } from 'lucide-react';

export default function Overview({ setPaginaApp }) {
  return (
    <div className="space-y-6">
      {/* Cards de Métricas Rápidas */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard icon="💪" title="Tensão Muscular" value="72" unit="%" label="Elevada" color="green" />
        <DashboardCard icon="☾" title="Qualidade do Sono" value="68" unit="%" label="Boa" color="blue" />
        <DashboardCard icon="▭" title="Fadiga Muscular" value="67" unit="%" label="Moderada" color="orange" />
        <DashboardCard icon="♡" title="Batimentos" value="82" unit="bpm" label="Normal" color="red" />
      </section>

      {/* Seção Principal de Detalhes */}
      <section className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5">
        
        {/* Coluna Esquerda: Gráfico de Dor e Registros */}
        <div className="space-y-5 min-w-0">
          
          {/* Gráfico */}
          <div className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  Fadiga Muscular 
                  <span className="text-[#8198b8] cursor-help" title="Índice estimado de fadiga muscular baseado em microcontrações corporais.">
                    <Info size={16} />
                  </span>
                </h2>
              <select className="rounded-xl border border-[#1d3152] bg-[#0b1830] px-3 py-1.5 text-sm text-[#d6e2f5] focus:border-[#3b82f6] outline-none">
                <option>Últimas 24h</option>
                <option>Últimos 7 dias</option>
                <option>Último mês</option>
              </select>
            </div>
            <PainChart />
          </div>

          {/* Registros de Hoje */}
          <div className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Registros de Hoje</h2>
            <div className="space-y-1">
              <MetricRow icon="💪" name="Tensão Muscular" time="20:30" value="72 %" color="green" />
              <MetricRow icon="☾" name="Qualidade do Sono" time="07:45" value="68 %" color="blue" />
              <MetricRow icon="▭" name="Fadiga Muscular" time="20:30" value="67 %" color="orange" />
            </div>
            <button 
              onClick={() => setPaginaApp("historico")} 
              className="mt-5 w-full text-center text-[#3b82f6] font-semibold hover:text-[#5897fc] hover:underline transition duration-200"
            >
              Ver histórico completo &rsaquo;
            </button>
          </div>
        </div>

        {/* Coluna Direita: Risco, Status e Dica */}
        <div className="space-y-5 min-w-0">
          
          {/* Risco de Crise */}
          <div className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-4 sm:p-6 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-left mb-4 flex items-center gap-2">
              Risco de Crise 
              <span className="text-[#8198b8] cursor-help" title="Algoritmo preditivo de crise de fibromialgia baseado em tensão e temperatura.">
                <Info size={16} />
              </span>
            </h2>
            <RiskGauge value={38} />
            <div className="mt-4">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">38<span className="text-xl">%</span></p>
              <p className="text-orange-400 font-semibold text-lg mt-1 flex items-center justify-center gap-1.5">
                <ShieldAlert size={18} /> Moderado
              </p>
            </div>
            <p className="text-[#a5b7d1] mt-4 text-sm leading-relaxed">
              Os sinais estão sob controle. Continue monitorando e mantenha seus alongamentos preventivos.
            </p>
          </div>

          {/* Status da Pulseira */}
          <div className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              Status da Pulseira
            </h2>
            <ul className="space-y-3.5 text-sm sm:text-base">
              <li className="flex items-center justify-between">
                <span className="text-[#a5b7d1]">Conexão:</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Conectada
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#a5b7d1]">Bateria:</span>
                <span className="font-semibold text-white">87% 🔋</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-[#a5b7d1]">Sinal Bluetooth:</span>
                <span className="font-semibold text-white">Forte (4.2 GHz)</span>
              </li>
            </ul>
          </div>

          {/* Dica do Dia */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0b1830] to-[#0d2244] border border-[#1d3152] p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Sparkles size={60} className="text-[#3b82f6]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Sparkles size={18} className="text-[#3b82f6]" />
              Dica do Dia
            </h2>
            <p className="text-[#a5b7d1] leading-relaxed text-sm sm:text-base">
              Alongamentos leves e uma boa noite de sono ajudam a reduzir significativamente a tensão e a fadiga muscular.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
