import React from 'react';
import { HeartPulse, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative px-6 py-20 md:px-16 lg:px-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#7c3aed,transparent_35%),radial-gradient(circle_at_80%_40%,#06b6d4,transparent_30%)] pointer-events-none" />
      
      <div className="relative grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto z-10">
        
        {/* Left column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/20 px-4 py-2 text-xs sm:text-sm font-semibold mb-6">
            <HeartPulse size={16} className="animate-pulse" /> Tecnologia para monitoramento de fibromialgia
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Pulseira inteligente para detectar sinais de crise precoce
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Um dispositivo vestível elegante que utiliza sensores bioelétricos, tensão muscular e temperatura da pele para acompanhar microvariações do corpo e enviar dados em tempo real.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="#funcionamento" 
              className="rounded-2xl bg-cyan-400 text-slate-950 px-8 py-4 font-bold text-center hover:bg-cyan-300 hover:scale-105 active:scale-95 transition duration-200 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Ver Funcionamento
            </a>
            <a 
              href="#app" 
              className="rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 px-8 py-4 font-bold text-center hover:bg-white/10 hover:scale-105 active:scale-95 transition duration-200"
            >
              Conhecer o Aplicativo
            </a>
          </div>
        </motion.div>

        {/* Right column: 3D Wristband Render Concept */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative rounded-[2.5rem] bg-white/5 border border-white/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl w-full max-w-md overflow-hidden">
            {/* Ambient shadow glow */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

            {/* Wrapper de centralização do eixo */}
            <div className="relative h-64 w-64 mx-auto flex items-center justify-center">
              {/* Glowing wristband body */}
              <div className="absolute inset-0 rounded-full border-[24px] border-cyan-400/80 shadow-[0_0_80px_rgba(34,211,238,0.35)] animate-[spin_12s_linear_infinite]">
                {/* Strap indicator */}
                <div className="absolute top-4 right-1 h-6 w-12 rounded-full bg-slate-950 border border-cyan-200/40" />
              </div>

              {/* Center screen (non-rotating) */}
              <div className="h-32 w-28 rounded-3xl bg-slate-950 border border-white/20 flex flex-col items-center justify-center shadow-2xl z-10 p-4">
                <Activity className="text-cyan-300 animate-pulse" size={48} />
                <span className="text-[10px] uppercase tracking-wider text-cyan-200 font-bold mt-2">Active</span>
              </div>
            </div>
            
            <p className="mt-8 text-center text-slate-400 text-sm font-semibold tracking-wide">
              Design conceitual do dispositivo vestível
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
