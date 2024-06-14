import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './App.css';

const products = [
  {
    name: "Product 1",
    description: "This is product 1",
    price: 2499,
    image: "product1.png",
  },
  {
    name: "Product 2",
    description: "This is product 2",
    price: 439,
    image: "product2.png",
  },
  {
    name: "Product 3",
    description: "This is product 3",
    price: 1819,
    image: "product3.png",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
