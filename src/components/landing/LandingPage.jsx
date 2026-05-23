import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import AppPreview from './AppPreview';
import AuthForms from './AuthForms';
import SyncDevice from './SyncDevice';
import { HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage({ setTelaApp }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* Seção Hero */}
      <Hero />

      {/* Cartões Informativos de Recursos / Sensores */}
      <Features />

      {/* Como funciona */}
      <HowItWorks />

      {/* Preview do Aplicativo Móvel */}
      <AppPreview />

      {/* Área de Login e Registro */}
      <AuthForms setTelaApp={setTelaApp} />

      {/* Sincronização do Dispositivo */}
      <SyncDevice setTelaApp={setTelaApp} />

      {/* Impacto Esperado */}
      <section className="px-6 py-24 md:px-16 lg:px-24 bg-gradient-to-t from-slate-950 to-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex h-12 w-12 rounded-2xl bg-cyan-500/10 text-cyan-300 items-center justify-center mx-auto mb-4">
            <HeartPulse size={24} className="animate-pulse" />
          </div>
          <span className="text-cyan-300 font-extrabold uppercase tracking-widest text-xs sm:text-sm block">
            Impacto esperado
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Mais autonomia para quem convive com a fibromialgia
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Por ser uma condição com sintomas oscilantes e muitas vezes invisíveis a terceiros, o monitoramento contínuo ajuda a tangibilizar os sinais vitais corporais. A proposta viabiliza o autoconhecimento preventivo e promove qualidade de vida através de dados e previsibilidade.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="px-6 py-12 md:px-16 lg:px-24 bg-slate-950 border-t border-white/5 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">V</div>
            <p className="font-semibold text-slate-400">VitalMonitor / FibroBand</p>
          </div>
          <p className="text-center md:text-left text-xs text-slate-600">
            © {new Date().getFullYear()} Projeto Conceitual. Desenvolvido para fins de monitoramento de fibromialgia.
          </p>
          <div className="flex gap-4 font-semibold text-xs text-slate-400">
            <a href="#funcionamento" className="hover:text-cyan-300 transition">Funcionamento</a>
            <a href="#app" className="hover:text-cyan-300 transition">Aplicativo</a>
            <a href="#cadastro" className="hover:text-cyan-300 transition">Entrar</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
