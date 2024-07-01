import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SellProducts from './components/SellProducts';
import BuyProducts from './components/BuyProducts';
import Cart from './components/Cart';
import './App.css';  

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([cartItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Sell</Link>
                    <Link to="/buy">Buy</Link>
                    <Link to="/cart">Cart ({cartItems.length})</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<SellProducts />} />
                    <Route path="/buy" element={<BuyProducts addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;