// CustomerList.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ id: '', name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email) {
      setCustomers([...customers, { ...newCustomer, id: uuidv4() }]);
      setNewCustomer({ id: '', name: '', email: '' });
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Customer</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
    </div>
  );
};

export default CustomerList;
