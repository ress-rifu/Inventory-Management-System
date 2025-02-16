import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);

  const fetchSuppliers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/suppliers`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setSuppliers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Supplier Management</h2>
      {suppliers.map((sup) => (
        <div key={sup.id} className="mb-2">
          {sup.name} ({sup.contact})
        </div>
      ))}
      {/* Add new supplier form, etc. */}
    </div>
  );
}

export default SupplierManagement;
