import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/landing/LandingPage';
import AppDashboard from './components/dashboard/AppDashboard';

function AppContent() {
  const [telaApp, setTelaApp] = useState(false);
  const { usuarioLogado } = useAuth();

  // Mantém a sincronização de tela com o estado de login
  useEffect(() => {
    if (usuarioLogado) {
      setTelaApp(true);
    } else {
      setTelaApp(false);
    }
  }, [usuarioLogado]);

  return (
    <>
      {telaApp ? (
        <AppDashboard setTelaApp={setTelaApp} />
      ) : (
        <LandingPage setTelaApp={setTelaApp} />
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
