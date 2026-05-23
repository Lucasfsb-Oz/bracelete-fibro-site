import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [contas, setContas] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [isSynced, setIsSynced] = useState(false);

  // Carregar contas e usuário logado na inicialização
  useEffect(() => {
    const contasSalvas = JSON.parse(localStorage.getItem("contasFibroBand") || "[]");
    setContas(contasSalvas);

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogadoFibroBand") || "null");
    if (usuarioSalvo) {
      setUsuarioLogado(usuarioSalvo);
    }
  }, []);

  function criarConta(nome, email, senha, tipo, callback) {
    if (!nome || !email || !senha || !tipo) {
      setMensagem("Preencha todos os campos para criar a conta.");
      return false;
    }

    const emailJaExiste = contas.some(
      (conta) => conta.email.toLowerCase() === email.toLowerCase()
    );

    if (emailJaExiste) {
      setMensagem("Este e-mail já está cadastrado. Entre na conta existente.");
      return false;
    }

    const novaConta = {
      nome,
      email,
      senha,
      tipo,
      criadaEm: new Date().toISOString(),
    };

    const novasContas = [...contas, novaConta];
    setContas(novasContas);
    localStorage.setItem("contasFibroBand", JSON.stringify(novasContas));
    setMensagem("Conta criada com sucesso. Redirecionando para sincronização...");
    
    if (callback) callback();
    return true;
  }

  function entrarConta(email, senha, callback) {
    if (!email || !senha) {
      setMensagem("Preencha o e-mail e a senha.");
      return false;
    }

    const contaEncontrada = contas.find(
      (conta) => conta.email.toLowerCase() === email.toLowerCase() && conta.senha === senha
    );

    if (!contaEncontrada) {
      setMensagem("E-mail ou senha incorretos.");
      return false;
    }

    setUsuarioLogado(contaEncontrada);
    localStorage.setItem("usuarioLogadoFibroBand", JSON.stringify(contaEncontrada));
    setMensagem(`Bem-vindo(a), ${contaEncontrada.nome}. Abrindo página inicial do app...`);
    
    if (callback) callback(contaEncontrada);
    return true;
  }

  function sairConta() {
    setUsuarioLogado(null);
    setIsSynced(false);
    localStorage.removeItem("usuarioLogadoFibroBand");
    setMensagem("");
  }

  function sincronizarPulseira() {
    setIsSynced(true);
  }

  return (
    <AuthContext.Provider
      value={{
        usuarioLogado,
        mensagem,
        setMensagem,
        isSynced,
        criarConta,
        entrarConta,
        sairConta,
        sincronizarPulseira,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
