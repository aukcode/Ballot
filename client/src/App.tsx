import React from 'react';
import './App.css';
import { Routes } from './routes/Routes';
import { AuthContext } from './api/auth/AuthContext';
import { CreateAuthHook } from './api/auth/AuthHook';

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthContext.Provider value={CreateAuthHook()}>
        <Routes />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
