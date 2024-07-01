import React, { useState } from 'react';
import './SellProducts.css';  // Importing CSS for SellProducts component

const SellProducts = () => {
    const [products, setProducts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newProduct = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price'),
            buyingDate: formData.get('buying-date'),
            buyingPrice: formData.get('buying-price'),
            photos: formData.getAll('photos'),
            yourDetails: formData.get('your-details'),
            phone: formData.get('phone'),
            location: formData.get('location'),
        };
        setProducts([products, newProduct]);
    };

    return (
        <div>
            <header>
                <div id="logo">InstiOlx</div>
                <div className="navbar">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/categories">Categories</a>
                    <a href="/sell" className="active">+Sell</a>
                </div>
            </header>
            <div className="container">
                <h1>Sell Your Item</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="buying-date">Buying Date</label>
                        <input type="date" id="buying-date" name="buying-date" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="buying-price">Buying Price</label>
                        <input type="number" id="buying-price" name="buying-price" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photos">Upload Multiple Photos</label>
                        <input type="file" id="photos" name="photos[]" multiple accept="image/*" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="your-details">Your Details</label>
                        <input type="text" id="your-details" name="your-details" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" required />
                    </div>
                    <button type="submit" className="post-button">Post Ad</button>
                </form>
            </div>
        </div>
    );
};

export default SellProducts;
