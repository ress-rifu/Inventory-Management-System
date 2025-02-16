import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <nav className="bg-blue-600 p-4 flex justify-between text-white">
        <div>Admin Dashboard</div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome Admin</h1>
        <ul className="mb-4">
          <li>
            <Link className="text-blue-500" to="employee-management">Employee Management</Link>
          </li>
          <li>
            <Link className="text-blue-500" to="supplier-management">Supplier Management</Link>
          </li>
          <li>
            <Link className="text-blue-500" to="category-management">Category Management</Link>
          </li>
          <li>
            <Link className="text-blue-500" to="product-management">Product Management</Link>
          </li>
          <li>
            <Link className="text-blue-500" to="sales-management">Sales Management</Link>
          </li>
        </ul>
        <Routes>
          <Route path="employee-management" element={<div>Employee Management Section</div>} />
          <Route path="supplier-management" element={<div>Supplier Management Section</div>} />
          <Route path="category-management" element={<div>Category Management Section</div>} />
          <Route path="product-management" element={<div>Product Management Section</div>} />
          <Route path="sales-management" element={<div>Sales Management Section</div>} />
          <Route path="" element={<div>Select a section from the menu.</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
