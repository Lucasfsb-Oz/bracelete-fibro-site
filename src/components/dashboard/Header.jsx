import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, Settings, Cpu, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Header({ setTelaApp }) {
  const { usuarioLogado, sairConta } = useAuth();
  const [perfilAberto, setPerfilAberto] = useState(false);
  const dropdownRef = useRef(null);
  
  const hoje = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Fechar dropdown ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPerfilAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const iniciais = usuarioLogado?.nome
    ? usuarioLogado.nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'U';

  return (
    <div className="flex items-center justify-between gap-4 mb-6 xl:mb-8" ref={dropdownRef}>
      <div>
        <p className="text-sm sm:text-lg xl:text-xl text-[#d6e2f5] font-semibold flex items-center gap-2">
          <span className="text-[#3b82f6]">▣</span> {hoje}
        </p>
        <p className="text-xs sm:text-sm text-[#8198b8] mt-1">
          Olá, <span className="text-white font-medium">{usuarioLogado?.nome || "usuário"}</span>
        </p>
      </div>

      <div className="relative flex items-center gap-4 xl:gap-6">
        {/* Notificações */}
        <button className="relative p-2 rounded-xl hover:bg-[#10264a] text-[#9fb5d1] hover:text-white transition duration-200">
          <Bell size={24} />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-[#06101f]" />
        </button>

        {/* Botão Sair Mobile */}
        <button 
          onClick={sairConta} 
          className="xl:hidden rounded-xl border border-[#1d3152] px-3 py-2 text-sm text-[#a5b7d1] hover:bg-[#10264a] hover:text-white transition duration-200"
        >
          Sair
        </button>

        {/* Avatar de Perfil */}
        <button 
          onClick={() => setPerfilAberto(!perfilAberto)} 
          className="h-10 w-10 xl:h-12 xl:w-12 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#7c3aed] flex items-center justify-center text-sm xl:text-base font-bold text-white shrink-0 hover:ring-2 hover:ring-[#3b82f6] hover:scale-105 transition duration-200"
        >
          {iniciais}
        </button>

        {/* Menu Dropdown de Perfil */}
        {perfilAberto && (
          <div className="absolute right-0 top-14 w-72 rounded-3xl bg-[#08162b] border border-[#1d3152] shadow-2xl p-5 z-30 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex items-center gap-4 border-b border-[#1d3152] pb-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#7c3aed] flex items-center justify-center text-lg font-bold text-white shrink-0">
                {iniciais}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base truncate text-white">{usuarioLogado?.nome || "Usuário"}</p>
                <p className="text-xs text-[#9fb5d1] truncate">{usuarioLogado?.email || "Conta conectada"}</p>
              </div>
            </div>

            <div className="space-y-1 text-[#c4d3ea] text-sm">
              <button className="w-full flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-[#10264a] hover:text-white transition duration-200">
                <User size={18} className="text-[#3b82f6]" />
                <span>Meu Perfil</span>
              </button>
              <button className="w-full flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-[#10264a] hover:text-white transition duration-200">
                <Settings size={18} className="text-[#3b82f6]" />
                <span>Configurações</span>
              </button>
              <button className="w-full flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-[#10264a] hover:text-white transition duration-200">
                <Cpu size={18} className="text-[#3b82f6]" />
                <span>Dispositivo Conectado</span>
              </button>
              <hr className="border-[#1d3152] my-2" />
              <button 
                onClick={() => { setPerfilAberto(false); sairConta(); }} 
                className="w-full flex items-center gap-3 rounded-xl px-4 py-2.5 text-rose-400 hover:bg-rose-500/10 transition duration-200"
              >
                <LogOut size={18} />
                <span>Sair da Conta</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
