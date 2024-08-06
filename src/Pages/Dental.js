import React, { useState, useEffect } from 'react';
import "../Styles/Components/Dental.css";

const Dental = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=18')
            .then(res => res.json())
            .then(data => {
                const featured = data.products.map(product => ({
                    src: product.images[0],
                    name: product.title,
                    price: product.price,
                }));
                setFeaturedProducts(featured);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="dental-page">
            <nav className="breadcrumb">
                <div className="breadcrumb-content">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li> &gt; </li>
                        <li>Dental</li>
                    </ul>
                </div>
            </nav>
            <div className="main-content">
                <div className="sidebar">
                    <h3>Category</h3>
                    <ul>
                        <li><a href="/mom-and-baby">Mom and Baby</a></li>
                        <li><a href="/devices">Devices</a></li>
                        <li><a href="/treatments">Treatments</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="filter-options">
                        <span className='filter-item'>Sort By:</span>
                        <span className="filter-item">Popularity</span>
                        <span className="filter-item">High to Low</span>
                        <span className="filter-item">Low to High</span>
                        <span className="filter-item">Discount</span>
                    </div>
                    <div className="image-grid">
                        {featuredProducts.map((item, index) => (
                            <div key={index} className="image-item">
                                <img src={item.src} alt={`Dental Product ${index + 1}`} />
                                <div className="dental-info">
                                    <div className="dental-name">{item.name}</div>
                                    <div className="dental-price">₹{item.price}</div>
                                    <button className="add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dental;
