import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

function DashboardPage() {
  const [products, setProducts] = useState([]);
  const role = localStorage.getItem('role');

  const fetchProducts = async () => {
    const res = await API.get('/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Dashboard</h2>
      {role === 'Admin' && <ProductForm onSuccess={fetchProducts} />}
      <ProductList products={products} refresh={fetchProducts} />
    </div>
  );
}

export default DashboardPage;
