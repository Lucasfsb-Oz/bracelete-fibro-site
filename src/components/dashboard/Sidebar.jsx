import React from 'react';
import { HeartPulse, X, LayoutGrid, Activity, History } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ paginaApp, setPaginaApp, setTelaApp }) {
  const { sairConta } = useAuth();

  return (
    <aside className="xl:w-[300px] xl:shrink-0 bg-[#07101f] xl:min-h-screen border-b xl:border-b-0 xl:border-r border-[#1a2a44] px-4 sm:px-6 py-5 xl:py-8 flex xl:flex-col gap-4 xl:gap-0 overflow-x-auto xl:overflow-visible">
      {/* Logo */}
      <div className="flex items-center shrink-0 xl:mb-10 w-full justify-between xl:justify-start">
        <div className="flex items-center">
          <div className="h-11 w-11 xl:h-12 xl:w-12 rounded-2xl bg-[#10264a] flex items-center justify-center shrink-0">
            <HeartPulse className="text-[#3b82f6]" size={26} />
          </div>
          <h2 className="ml-3 text-xl xl:text-2xl font-extrabold whitespace-nowrap text-white">VitalMonitor</h2>
        </div>
        <button
          onClick={() => setTelaApp(false)}
          className="hidden xl:block ml-auto text-[#9fb5d1] text-3xl leading-none hover:text-white transition duration-200"
          title="Voltar para a Landing Page"
        >
          &times;
        </button>
      </div>

      {/* Navegação */}
      <div className="flex xl:block gap-3 xl:space-y-3 text-sm xl:text-lg font-semibold shrink-0">
        <button
          onClick={() => setPaginaApp("inicio")}
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 xl:w-full xl:px-5 xl:py-4 transition duration-200 whitespace-nowrap ${
            paginaApp === "inicio"
              ? "bg-[#10264a] text-[#3b82f6]"
              : "text-[#a5b7d1] hover:bg-[#101b31] hover:text-white"
          }`}
        >
          <LayoutGrid size={22} />
          <span>Início</span>
        </button>
        <button
          onClick={() => setPaginaApp("grafico")}
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 xl:w-full xl:px-5 xl:py-4 transition duration-200 whitespace-nowrap ${
            paginaApp === "grafico"
              ? "bg-[#10264a] text-[#3b82f6]"
              : "text-[#a5b7d1] hover:bg-[#101b31] hover:text-white"
          }`}
        >
          <Activity size={22} />
          <span>Saúde Corporal</span>
        </button>
        <button
          onClick={() => setPaginaApp("historico")}
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 xl:w-full xl:px-5 xl:py-4 transition duration-200 whitespace-nowrap ${
            paginaApp === "historico"
              ? "bg-[#10264a] text-[#3b82f6]"
              : "text-[#a5b7d1] hover:bg-[#101b31] hover:text-white"
          }`}
        >
          <History size={22} />
          <span>Histórico</span>
        </button>
      </div>

      {/* Dispositivo Status e Perfil Rápido (Somente Desktop) */}
      <div className="hidden xl:block mt-auto space-y-3 w-full">
        <div className="rounded-2xl bg-[#0b1830] border border-[#1d3152] p-4 text-[#a5b7d1]">
          <p className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pulseira conectada</span>
          </p>
          <p className="mt-2 text-sm">Bateria: 87% 🔋</p>
        </div>
        <button
          onClick={sairConta}
          className="w-full rounded-2xl bg-rose-950/20 border border-rose-900/30 hover:bg-rose-950/40 p-4 text-left text-rose-300 font-semibold transition duration-200"
        >
          Sair da Conta
        </button>
      </div>
    </aside>
  );
}
