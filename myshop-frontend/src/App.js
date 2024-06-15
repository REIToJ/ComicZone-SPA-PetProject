import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
