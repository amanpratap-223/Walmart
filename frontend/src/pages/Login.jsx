

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log("User Login:", { email, password });
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please check or register first.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className='w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12'>
        <form onSubmit={handleLogin} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm mx-auto'>
          <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>Walmart</h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'>Hey there! 👋</h2>
          <p className='text-center mb-6'>Enter your username and password to login</p>

          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded' placeholder='Enter your email address' required />
          </div>

          <div className='mb-4'>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded' placeholder='Enter your password' required />
          </div>

          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
            Sign In
          </button>

          <p className='mt-6 text-center text-sm'>
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-[52%] pt-10 pr-10">
        <img
          src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Login Illustration"
          className="rounded-xl object-cover h-[750px] w-full"
        />
      </div>
    </div>
  );
};

export default Login;
