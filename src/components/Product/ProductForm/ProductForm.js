// ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      onAddProduct(newProduct);
      setNewProduct({ name: '', price: '' });
    }
  };

  return (
    <div className="product-form">
      <h3>Add New Product</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
