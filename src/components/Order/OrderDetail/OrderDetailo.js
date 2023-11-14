// OrderDetail.js
import React from 'react';

const OrderDetail = ({ order }) => {
  return (
    <div className="order-detail">
      <h2>Order Detail</h2>
      {order ? (
        <div>
          <p>
            <strong>Product:</strong> {order.product}
          </p>
          <p>
            <strong>Customer:</strong> {order.customer}
          </p>
          <p>
            <strong>Quantity:</strong> {order.quantity}
          </p>
          {/* Add additional details here */}
        </div>
      ) : (
        <p>No order selected</p>
      )}
    </div>
  );
};

export default OrderDetail;
