import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Rewards from './components/Rewards';
import Account from './components/Account';
import Chatbot from './components/chatbot';
import ReferralPage from './ReferralPage';

import './index.css';
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/home" element={user ? <Home user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/rewards" element={user ? <Rewards /> : <Navigate to="/login" />} />
        <Route path="/chatbot" element={user ? <Chatbot /> : <Navigate to="/login" />} />
        <Route path="/referral" element={user ? <ReferralPage /> : <Navigate to="/login" />} />
        <Route path="/account" element={user ? <Account /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
