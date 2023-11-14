// CustomerForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomerForm = ({ onAddCustomer }) => {
  const [newCustomer, setNewCustomer] = useState({ id: '', name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email) {
      onAddCustomer({ ...newCustomer, id: uuidv4() });
      setNewCustomer({ id: '', name: '', email: '' });
    }
  };

  return (
    <div className="customer-form">
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
  );
};

export default CustomerForm;
