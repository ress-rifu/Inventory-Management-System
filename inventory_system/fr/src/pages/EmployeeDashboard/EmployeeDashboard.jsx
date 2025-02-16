import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function EmployeeDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <nav className="bg-green-600 p-4 flex justify-between text-white">
        <div>Employee Dashboard</div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome Employee</h1>
        <ul className="mb-4">
          <li>
            <Link className="text-green-500" to="billing">Billing Section</Link>
          </li>
        </ul>
        <Routes>
          <Route path="billing" element={<div>Billing Section Content</div>} />
          <Route path="" element={<div>Select a section from the menu.</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
