import React from 'react';
import StepCard from '../ui/StepCard';

export default function HowItWorks() {
  return (
    <section id="funcionamento" className="px-6 py-20 md:px-16 lg:px-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Texto explicativo */}
        <div>
          <span className="text-cyan-300 font-extrabold uppercase tracking-widest text-xs sm:text-sm">Mecânica do aparelho</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Como a pulseira funciona?
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            A pulseira fica em contato direto com a pele e realiza leituras eletrofisiológicas contínuas por meio de sensores posicionados internamente na parte inferior do chassi. Esses sensores acompanham microcorrentes elétricas musculares e oscilações de temperatura.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            Após a coleta inicial, os algoritmos integrados processam os dados locais e os sincronizam via Bluetooth com o aplicativo de forma criptografada. O objetivo é reconhecer o seu padrão corporal de repouso e emitir alertas precoces de crise.
          </p>
        </div>

        {/* Lado Direito: Passos do Fluxo */}
        <div className="grid gap-4">
          <StepCard 
            number="01" 
            title="Coleta Autônoma" 
            text="Sensores bioelétricos e térmicos captam as variações e tensões diretamente da derme do usuário." 
          />
          <StepCard 
            number="02" 
            title="Processamento Inteligente" 
            text="O sistema interno da pulseira compara os dados com o histórico padrão para identificar anomalias." 
          />
          <StepCard 
            number="03" 
            title="Sincronização no App" 
            text="As informações são transmitidas instantaneamente para o smartphone, gerando gráficos de bem-estar." 
          />
        </div>

      </div>
    </section>
  );
}
