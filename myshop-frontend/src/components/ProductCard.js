import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price} ₽</p>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
}

export default ProductCard;
