import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HouseContext } from './HouseContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setuserdata } = useContext(HouseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await fetch('https://real-estate-app.free.beeceptor.com/api/real-estate-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const users = await response.json();
      console.log('Fetched users:', users); // Debug statement

      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setuserdata(user.id);
        setIsLoggedIn(true);
        setError('');
        console.log('User found:', user); // Debug statement

        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  if (isLoggedIn) {
    return <div className="text-center mt-8">You are logged in!</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link to="/Registration" className="text-indigo-500 hover:underline">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
