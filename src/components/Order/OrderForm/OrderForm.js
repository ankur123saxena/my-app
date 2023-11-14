// OrderForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderForm = ({ onAddOrder }) => {
  const [newOrder, setNewOrder] = useState({ id: '', product: '', customer: '', quantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    if (newOrder.product && newOrder.customer && newOrder.quantity) {
      onAddOrder({ ...newOrder, id: uuidv4() });
      setNewOrder({ id: '', product: '', customer: '', quantity: '' });
    }
  };

  return (
    <div className="order-form">
      <h3>Add New Order</h3>
      <label>
        Product:
        <input
          type="text"
          name="product"
          value={newOrder.product}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Customer:
        <input
          type="text"
          name="customer"
          value={newOrder.customer}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="text"
          name="quantity"
          value={newOrder.quantity}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddOrder}>Add Order</button>
    </div>
  );
};

export default OrderForm;
