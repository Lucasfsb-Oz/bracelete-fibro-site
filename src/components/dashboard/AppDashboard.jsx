import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from './Overview';
import HealthStats from './HealthStats';
import HistoryLog from './HistoryLog';

export default function AppDashboard({ setTelaApp }) {
  const [paginaApp, setPaginaApp] = useState("inicio");

  return (
    <main className="min-h-screen bg-[#06101f] text-white xl:flex">
      {/* Menu Lateral */}
      <Sidebar 
        paginaApp={paginaApp} 
        setPaginaApp={setPaginaApp} 
        setTelaApp={setTelaApp} 
      />

      {/* Área Principal de Conteúdo */}
      <section className="flex-1 px-4 sm:px-6 lg:px-8 py-6 xl:py-7 overflow-y-auto max-h-screen">
        <div className="w-full max-w-[1180px] mx-auto">
          {/* Header Superior */}
          <Header setTelaApp={setTelaApp} />

          {/* Sub-telas Dinâmicas */}
          {paginaApp === "inicio" && (
            <Overview setPaginaApp={setPaginaApp} />
          )}
          {paginaApp === "grafico" && (
            <HealthStats />
          )}
          {paginaApp === "historico" && (
            <HistoryLog />
          )}
        </div>
      </section>
    </main>
  );
}
