// OrderList.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ id: '', product: '', customer: '', quantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    if (newOrder.product && newOrder.customer && newOrder.quantity) {
      setOrders([...orders, { ...newOrder, id: uuidv4() }]);
      setNewOrder({ id: '', product: '', customer: '', quantity: '' });
    }
  };

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <strong>Product:</strong> {order.product} | <strong>Customer:</strong> {order.customer} |{' '}
            <strong>Quantity:</strong> {order.quantity}
          </li>
        ))}
      </ul>
      <div>
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
    </div>
  );
};

export default OrderList;
