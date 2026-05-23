import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Activity, Wifi, Check, Cpu } from 'lucide-react';
import StepCard from '../ui/StepCard';
import { motion } from 'framer-motion';

export default function SyncDevice({ setTelaApp }) {
  const { sincronizarPulseira, usuarioLogado } = useAuth();
  const [syncStatus, setSyncStatus] = useState("pronto"); // pronto, sincronizando, conectado

  const handleSincronizar = () => {
    setSyncStatus("sincronizando");
    setTimeout(() => {
      sincronizarPulseira();
      setSyncStatus("conectado");
      
      // Se o usuário estiver logado, redireciona para o aplicativo após 1 segundo
      if (usuarioLogado) {
        setTimeout(() => {
          setTelaApp(true);
        }, 1200);
      }
    }, 2000);
  };

  return (
    <section id="sincronizar" className="px-6 py-20 md:px-16 lg:px-24 bg-slate-900 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Passos de emparelhamento */}
        <div>
          <span className="text-cyan-300 font-extrabold uppercase tracking-widest text-xs sm:text-sm">Emparelhamento</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Conecte sua pulseira inteligente
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            O processo de conexão utiliza pareamento de baixa energia (BLE). Certifique-se de estar com o dispositivo a menos de 2 metros do seu smartphone para iniciar o sincronismo de dados em tempo real.
          </p>

          <div className="mt-8 grid gap-4">
            <StepCard number="01" title="Ativar Dispositivo" text="Mantenha a pulseira ligada e próxima ao receptor Bluetooth." />
            <StepCard number="02" title="Buscar Sinal" text="O aplicativo rastreia a rede local em busca do identificador FibroBand." />
            <StepCard number="03" title="Iniciar Sincronia" text="Confirme a conexão para espelhar os sensores de estresse térmico." />
          </div>
        </div>

        {/* Lado Direito: Interface de Conexão */}
        <div className="rounded-[2rem] bg-slate-950/60 border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl relative">
          
          <div className="rounded-3xl bg-slate-950/90 border border-white/10 p-6 text-center space-y-6">
            
            {/* Círculo com animação de pulso */}
            <div className="relative flex justify-center items-center">
              {syncStatus === "sincronizando" && (
                <div className="absolute h-32 w-32 rounded-full border border-cyan-400/40 animate-ping" />
              )}
              <div className={`h-28 w-28 rounded-full border-4 flex items-center justify-center shadow-lg transition duration-500 ${
                syncStatus === "conectado" 
                  ? "border-emerald-400 bg-emerald-500/10 text-emerald-400 shadow-[0_0_40px_rgba(52,211,153,0.2)]" 
                  : "border-cyan-400 bg-cyan-500/10 text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              }`}>
                {syncStatus === "conectado" ? <Check size={44} /> : <Activity size={44} className="animate-pulse" />}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">
                {syncStatus === "pronto" && "Pulseira encontrada"}
                {syncStatus === "sincronizando" && "Conectando ao dispositivo..."}
                {syncStatus === "conectado" && "Dispositivo Sincronizado!"}
              </h3>
              <p className="text-slate-400 text-sm font-semibold flex items-center justify-center gap-2">
                <Cpu size={16} /> Dispositivo: FibroBand-01
              </p>
            </div>

            {/* Status box */}
            <div className={`rounded-2xl border p-4 text-sm font-bold transition duration-300 ${
              syncStatus === "conectado"
                ? "bg-emerald-500/10 border-emerald-400/20 text-emerald-300"
                : syncStatus === "sincronizando"
                ? "bg-cyan-500/10 border-cyan-400/20 text-cyan-300 animate-pulse"
                : "bg-slate-900 border-white/10 text-cyan-200"
            }`}>
              {syncStatus === "pronto" && "Status: Pronta para sincronizar"}
              {syncStatus === "sincronizando" && "Status: Pareando canais bioelétricos..."}
              {syncStatus === "conectado" && (
                usuarioLogado 
                  ? "Conectado! Abrindo o painel..." 
                  : "Conectado! Entre na sua conta para salvar os dados."
              )}
            </div>

            {/* Botão de pareamento */}
            {syncStatus !== "conectado" && (
              <button 
                type="button" 
                onClick={handleSincronizar}
                disabled={syncStatus === "sincronizando"}
                className="w-full rounded-2xl bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-800 text-slate-950 py-4 font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                {syncStatus === "sincronizando" ? "Buscando canais..." : "Sincronizar pulseira"}
              </button>
            )}

            {syncStatus === "conectado" && !usuarioLogado && (
              <p className="text-xs text-amber-300 font-semibold animate-pulse">
                Nota: Faça login/cadastro no formulário acima para ver os dados salvos!
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
