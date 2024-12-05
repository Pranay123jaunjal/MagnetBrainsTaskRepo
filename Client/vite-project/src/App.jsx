import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './Pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './Pages/Dashboard';
import TaskDetailPage from './Pages/TaskDetailPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
