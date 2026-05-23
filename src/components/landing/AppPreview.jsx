import React from 'react';
import { Smartphone, BarChart3, Bell, ShieldCheck } from 'lucide-react';
import AppRow from '../ui/AppRow';
import MiniFeature from '../ui/MiniFeature';
import { motion } from 'framer-motion';

export default function AppPreview() {
  const chartHeights = [35, 52, 45, 72, 58, 86, 64];

  return (
    <section id="app" className="px-6 py-20 md:px-16 lg:px-24 bg-slate-950 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Simulador do Smartphone */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-sm mx-auto w-full group"
        >
          {/* Glowing aura around phone */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl group-hover:scale-105 transition duration-500 pointer-events-none" />

          {/* Smartphone outer frame */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-slate-700/60 p-4 shadow-2xl backdrop-blur-xl">
            
            {/* Screen Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-5 w-28 rounded-full bg-slate-950 z-20" />
            
            {/* Screen Inner */}
            <div className="rounded-[1.8rem] bg-slate-950 border border-slate-800/80 p-5 pt-7 overflow-hidden">
              {/* Screen Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Hoje</p>
                  <h3 className="text-lg font-extrabold text-white">Monitoramento</h3>
                </div>
                <Smartphone className="text-cyan-400 animate-bounce" size={20} />
              </div>

              {/* Real-time rows */}
              <div className="space-y-3">
                <AppRow label="Tensão muscular" value="Moderada" />
                <AppRow label="Temperatura" value="36,8°C" />
                <AppRow label="Sinais bioelétricos" value="Estável" />
              </div>

              {/* Graphic Mock */}
              <div className="mt-5 h-24 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-end justify-between gap-1.5 p-3">
                {chartHeights.map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-400 to-cyan-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>

              {/* Alerta Realista */}
              <div className="mt-4 rounded-xl bg-amber-500/10 border border-amber-400/20 p-3.5 flex gap-3 items-start">
                <Bell className="text-amber-400 shrink-0 mt-0.5 animate-ring" size={16} />
                <p className="text-xs text-amber-200 leading-normal">
                  Sinais elevados de estresse corporal. Recomenda-se alongar-se.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Detalhamento dos Recursos */}
        <div>
          <span className="text-cyan-300 font-extrabold uppercase tracking-widest text-xs sm:text-sm">Aplicativo conectado</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Seus dados integrados em tempo real
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            O aplicativo é o cérebro do sistema. Ele consolida os logs enviados de forma contínua pelo dispositivo, cria gráficos intuitivos, registra sua linha do tempo e cruza padrões para alertar antes que a crise se manifeste.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <MiniFeature icon={<BarChart3 size={20} />} title="Métricas Dinâmicas" text="Acompanhamento em gráficos simples de ler." />
            <MiniFeature icon={<Bell size={20} />} title="Central de Alertas" text="Notificações imediatas sobre flutuações anormais." />
            <MiniFeature icon={<ShieldCheck size={20} />} title="Histórico Permanente" text="Histórico estruturado para compartilhar com médicos." />
            <MiniFeature icon={<Smartphone size={20} />} title="Integração Rápida" text="Conexão rápida com a pulseira em poucos cliques." />
          </div>
        </div>

      </div>
    </section>
  );
}
