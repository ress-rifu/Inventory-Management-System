import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx';
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/employee/*" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
