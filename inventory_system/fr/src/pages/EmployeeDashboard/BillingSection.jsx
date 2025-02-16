import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function BillingSection() {
  const [items, setItems] = useState([{ productId: '', quantity: 1 }]);
  const [message, setMessage] = useState('');

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addRow = () => {
    setItems([...items, { productId: '', quantity: 1 }]);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/employee/billing`,
        { items },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      setMessage(res.data.message || 'Billing processed successfully');
    } catch (error) {
      setMessage('Error processing billing');
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Billing Section</h2>
      {items.map((item, idx) => (
        <div className="flex gap-2 mb-2" key={idx}>
          <input
            type="text"
            placeholder="Product ID"
            className="border p-2"
            value={item.productId}
            onChange={(e) => handleChange(idx, 'productId', e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="Quantity"
            className="border p-2 w-20"
            value={item.quantity}
            onChange={(e) => handleChange(idx, 'quantity', e.target.value)}
          />
        </div>
      ))}

      <div className="space-x-2">
        <button
          onClick={addRow}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Add Item
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Process Billing
        </button>
      </div>

      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
    </div>
  );
}

export default BillingSection;
