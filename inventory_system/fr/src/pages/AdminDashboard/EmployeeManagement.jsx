import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/api';

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/employees`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Employee Management</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="mb-2">
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
      {/* Form to create/edit employees goes here */}
    </div>
  );
}

export default EmployeeManagement;
