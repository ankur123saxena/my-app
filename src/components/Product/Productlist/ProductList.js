import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ id: '', name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, { ...newProduct, id: uuidv4() }]);
      setNewProduct({ id: '', name: '', price: '' });
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>
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
    </div>
  );
};

export default ProductList;
