// ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          {/* Add additional details here */}
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default ProductDetail;
