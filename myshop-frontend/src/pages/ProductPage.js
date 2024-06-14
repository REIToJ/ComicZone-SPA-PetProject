import React, { useState, useEffect } from 'react';
import { getProductById } from '../api';

function ProductPage({ match }) {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductPage;
