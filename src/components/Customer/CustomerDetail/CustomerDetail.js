// CustomerDetail.js
import React from 'react';

const CustomerDetail = ({ customer }) => {
  return (
    <div className="customer-detail">
      <h2>Customer Detail</h2>
      {customer ? (
        <div>
          <p>
            <strong>Name:</strong> {customer.name}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>
          {/* Add additional details here */}
        </div>
      ) : (
        <p>No customer selected</p>
      )}
    </div>
  );
};

export default CustomerDetail;
