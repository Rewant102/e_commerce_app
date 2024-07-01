import React, { useState } from 'react';
import './BuyProducts.css';  // Importing CSS for BuyProducts component
import ProductCard from './ProductCard';

const BuyProducts = ({ addToCart }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', price: 150 },
        { id: 2, name: 'Product B', price: 250 },
        // Add more products as needed
    ]);

    return (
        <div>
            <header>
                <div id="logo">InstiOlx</div>
                <div className="navbar">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/categories">Categories</a>
                    <a href="/sell">+Sell</a>
                </div>
            </header>
            <div className="container">
                <h1>Buy Products</h1>
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyProducts;
