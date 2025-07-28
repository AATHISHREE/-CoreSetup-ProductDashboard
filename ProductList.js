import React from 'react';
import API from '../services/api';

function ProductList({ products, refresh }) {
  const role = localStorage.getItem('role');

  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      await API.delete(`/products/${id}`);
      refresh();
    }
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th><th>Category</th><th>Stock</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(prod => (
          <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.category}</td>
            <td>{prod.stock}</td>
            <td>
              {role === 'Admin' && <button onClick={() => handleDelete(prod.id)}>Delete</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
