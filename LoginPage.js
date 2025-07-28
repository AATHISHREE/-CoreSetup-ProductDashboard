import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Staff'); // Default to Staff
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      alert(`Welcome ${res.data.user.role}`);
      navigate('/dashboard');
    } catch (err) {
      alert('❌ Login failed. Please check your credentials.');
    }
  };

  const handleRegister = async () => {
    try {
      await API.post('/auth/register', {
        username,
        password,
        role,
      });
      alert(`✅ ${role} Registered Successfully. You can now login.`);
    } catch (err) {
      alert('❌ Registration failed. Username may already exist.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login / Register</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        style={{ display: 'block', marginBottom: 10 }}
      />
      <select
        value={role}
        onChange={e => setRole(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      >
        <option value="Staff">Staff</option>
        <option value="Admin">Admin</option>
      </select>

      <button onClick={handleLogin} style={{ marginRight: 10 }}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default LoginPage;
