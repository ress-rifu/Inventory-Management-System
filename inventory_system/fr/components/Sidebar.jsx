import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-60 bg-white shadow-md h-screen">
      <ul className="flex flex-col py-4">
        <li>
          <Link
            to="employee-management"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Employee Management
          </Link>
        </li>
        <li>
          <Link
            to="supplier-management"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Supplier Management
          </Link>
        </li>
        <li>
          <Link
            to="category-management"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Category Management
          </Link>
        </li>
        <li>
          <Link
            to="product-management"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Product Management
          </Link>
        </li>
        <li>
          <Link
            to="sales-management"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Sales Management
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
