import React, { useState } from 'react';
import API from '../services/api';

function ProductForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async () => {
    if (!name || !category || stock < 0) return alert('Fill all fields correctly');
    await API.post('/products', { name, category, stock });
    setName(''); setCategory(''); setStock('');
    onSuccess();
  };

  return (
    <div>
      <h4>Add Product</h4>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input placeholder="Stock" type="number" value={stock} onChange={e => setStock(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ProductForm;
