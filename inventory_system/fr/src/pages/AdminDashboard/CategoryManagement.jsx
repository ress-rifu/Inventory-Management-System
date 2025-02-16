import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function CategoryManagement() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/categories`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Category Management</h2>
      {categories.map((cat) => (
        <div key={cat.id} className="mb-2">
          {cat.categoryName}
        </div>
      ))}
      {/* Add new category form, etc. */}
    </div>
  );
}

export default CategoryManagement;
