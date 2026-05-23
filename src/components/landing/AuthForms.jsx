import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Lock, UserCheck, KeyRound } from 'lucide-react';

export default function AuthForms({ setTelaApp }) {
  const { criarConta, entrarConta, mensagem, setMensagem } = useAuth();
  
  // Estados do Cadastro
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");

  // Estados do Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  // Aba ativa no mobile (Cadastro vs Login)
  const [activeTab, setActiveTab] = useState("cadastro");

  const handleCriarConta = (e) => {
    e.preventDefault();
    criarConta(nome, email, senha, tipo, () => {
      // Limpa formulário após sucesso
      setNome("");
      setEmail("");
      setSenha("");
      setTipo("");
      setTimeout(() => {
        const syncEl = document.getElementById("sincronizar");
        if (syncEl) syncEl.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    });
  };

  const handleEntrarConta = (e) => {
    e.preventDefault();
    entrarConta(loginEmail, loginSenha, (conta) => {
      // Limpa formulário
      setLoginEmail("");
      setLoginSenha("");
      setTimeout(() => {
        setTelaApp(true);
      }, 800);
    });
  };

  return (
    <section id="cadastro" className="px-6 py-20 md:px-16 lg:px-24 bg-slate-950 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_560px] gap-12 items-center">
        
        {/* Lado Esquerdo: Conteúdo Explicativo */}
        <div>
          <span className="text-cyan-300 font-extrabold uppercase tracking-widest text-xs sm:text-sm">Criar conta</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Acompanhe seus dados de forma personalizada
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            Ao criar sua conta, você passa a ter acesso a recursos exclusivos de monitoramento contínuo. Nosso sistema armazena as leituras de forma estruturada para que você possa entender o comportamento do seu corpo.
          </p>
          <ul className="mt-8 space-y-4 text-slate-300 text-sm sm:text-base font-medium">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Cadastro seguro de paciente, responsável ou profissional</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Histórico de leituras gravado no seu perfil</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Alertas e relatórios personalizados configuráveis</span>
            </li>
          </ul>
        </div>

        {/* Lado Direito: Formulários Embelezados */}
        <div className="rounded-[2rem] bg-slate-900/60 border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Alternador de abas mobile */}
          <div className="flex bg-[#06101f] rounded-2xl p-1 mb-6">
            <button 
              onClick={() => { setActiveTab("cadastro"); setMensagem(""); }}
              className={`flex-1 text-center py-2.5 rounded-xl text-sm font-bold transition duration-200 ${
                activeTab === "cadastro" ? "bg-cyan-400 text-slate-950" : "text-[#a5b7d1] hover:text-white"
              }`}
            >
              Criar Conta
            </button>
            <button 
              onClick={() => { setActiveTab("login"); setMensagem(""); }}
              className={`flex-1 text-center py-2.5 rounded-xl text-sm font-bold transition duration-200 ${
                activeTab === "login" ? "bg-cyan-400 text-slate-950" : "text-[#a5b7d1] hover:text-white"
              }`}
            >
              Fazer Login
            </button>
          </div>

          {/* Renderização condicional das abas */}
          <div className="space-y-6">
            {activeTab === "cadastro" && (
              <form onSubmit={handleCriarConta} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Criar minha conta</h3>
                
                {/* Nome */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <User size={18} />
                  </span>
                  <input 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-white outline-none transition duration-200" 
                    type="text" 
                    placeholder="Nome completo" 
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <Mail size={18} />
                  </span>
                  <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-white outline-none transition duration-200" 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                  />
                </div>

                {/* Senha */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <Lock size={18} />
                  </span>
                  <input 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-white outline-none transition duration-200" 
                    type="password" 
                    placeholder="Senha forte" 
                  />
                </div>

                {/* Tipo de Usuário */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <UserCheck size={18} />
                  </span>
                  <select 
                    value={tipo} 
                    onChange={(e) => setTipo(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-slate-400 focus:text-white outline-none transition duration-200 appearance-none"
                  >
                    <option value="">Tipo de perfil</option>
                    <option value="Paciente">Paciente</option>
                    <option value="Responsável">Responsável</option>
                    <option value="Profissional de saúde">Profissional de saúde</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 py-3.5 font-bold hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer text-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
                  Confirmar Cadastro
                </button>
              </form>
            )}

            {activeTab === "login" && (
              <form onSubmit={handleEntrarConta} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Acessar minha conta</h3>
                
                {/* Email */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <Mail size={18} />
                  </span>
                  <input 
                    value={loginEmail} 
                    onChange={(e) => setLoginEmail(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-white outline-none transition duration-200" 
                    type="email" 
                    placeholder="E-mail cadastrado" 
                  />
                </div>

                {/* Senha */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                    <Lock size={18} />
                  </span>
                  <input 
                    value={loginSenha} 
                    onChange={(e) => setLoginSenha(e.target.value)} 
                    className="w-full rounded-2xl bg-[#06101f] border border-white/10 focus:border-cyan-400 pl-11 pr-5 py-3.5 text-sm text-white outline-none transition duration-200" 
                    type="password" 
                    placeholder="Sua senha" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-[#3b82f6] text-slate-950 hover:to-cyan-300 hover:from-cyan-300 py-3.5 font-bold hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer text-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
                  Entrar no Sistema
                </button>
              </form>
            )}
          </div>

          {/* Feedback */}
          {mensagem && (
            <div className="mt-6 rounded-2xl bg-[#06101f] border border-cyan-500/20 p-4 text-xs sm:text-sm text-cyan-300 text-center font-medium animate-pulse">
              {mensagem}
            </div>
          )}

          <p className="mt-6 text-[10px] text-slate-500 leading-relaxed text-center font-medium">
            Simulador: os dados são salvos no navegador via localStorage. Em produção, este sistema se conectaria a uma API REST segura com criptografia ponta a ponta.
          </p>
        </div>

      </div>
    </section>
  );
}
