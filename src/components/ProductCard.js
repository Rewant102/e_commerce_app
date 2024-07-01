import React from 'react';
import './ProductCard.css';  // Importing CSS for ProductCard component

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
