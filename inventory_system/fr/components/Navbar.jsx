import React from 'react';

function Navbar({ onLogout }) {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <div className="font-bold text-xl">Inventory System</div>
      <button 
        className="bg-blue-800 hover:bg-blue-700 px-3 py-2 rounded"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
