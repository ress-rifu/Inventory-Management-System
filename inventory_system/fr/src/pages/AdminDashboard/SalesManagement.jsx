import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function SalesManagement() {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/sales`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setSales(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sales Management</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id} className="mb-2">
            Sale ID: {sale.id}, Amount: {sale.totalAmount}, Date: {new Date(sale.saleDate).toLocaleString()}
          </li>
        ))}
      </ul>
      {/* Additional analytics or reporting */}
    </div>
  );
}

export default SalesManagement;
