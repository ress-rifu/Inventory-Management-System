import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function ProductManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Management</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id} className="mb-2">
            {prod.productName} - Price: {prod.price} - Stock: {prod.stock}
          </li>
        ))}
      </ul>
      {/* Add or edit product form */}
    </div>
  );
}

export default ProductManagement;
