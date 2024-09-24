import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate('/to-do-list');
  };

  const handleLogin = async () => {
    navigate('/to-do-list');
  };


  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4" />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-full">
          Log In
        </button>
        <button onClick={handleRegister} className="bg-blue-500 text-white p-2 rounded w-full mt-4">
          or Register
        </button>
      </div>
    </div>
  );
};

export default Login;