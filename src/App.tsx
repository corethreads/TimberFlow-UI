import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./services/authentication/presentation/Login";
import RegisterForm from "./services/authentication/presentation/Register";
import AuthLayout from "./services/components/Board";
import MainLayout from "./Wrapper/MainLayout";
import Dashboard from "./presentations/Dashboard";

type AuthView = 'login' | 'register';

const AuthPage: React.FC = () => {
  const [view, setView] = useState<AuthView>('register');

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center">
      <AuthLayout view={view}>
        {view === 'login' ? (
          <LoginForm onSwitch={() => setView('register')} />
        ) : (
          <RegisterForm onSwitch={() => setView('login')} />
        )}
      </AuthLayout>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
