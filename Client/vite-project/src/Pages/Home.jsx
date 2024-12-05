import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
      <Link to="/login" className="bg-blue-500 text-white p-2 rounded mr-4">
        Login
      </Link>
      <Link to="/register" className="bg-green-500 text-white p-2 rounded">
        Register
      </Link>
    </div>
  );
};

export default Home;
