import React from 'react';
import './Cart.css';  // Importing CSS for Cart component

const Cart = ({ cartItems, removeFromCart }) => {
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
                <h1>Cart</h1>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>No items in the cart</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <span>{item.name} - ${item.price}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
