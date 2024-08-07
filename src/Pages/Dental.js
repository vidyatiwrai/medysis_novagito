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
                    <div className="filter-options">
                        <span className='filter-item'>Sort By:</span>
                        <button className="filter-item">Popularity</button>
                        <span className="filter-item">High to Low</span>
                        <span className="filter-item">Low to High</span>
                        <span className="filter-item">Discount</span>
                    </div>
                </div>
            </nav>
            <div className="main-content">
            <div className="sidebar">

        <h3>Category</h3>
        <div className="dropdown-container">
            <select className="dropdown">
            <option style={{ color: '#1a1a1a'}}>Veterinary</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
            </select>
            <i class="fas fa-chevron-right dropdown-arrow"></i> 
        </div>

        <div className="dropdown-container">
            <select className="dropdown">
            <option style={{ color: '#1a1a1a' }}>Mom & Baby</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
            </select>
            <i class="fas fa-chevron-right dropdown-arrow"></i> 
        </div>

        <div className="dropdown-container">
            <select className="dropdown">
            <option style={{ color: '#1a1a1a' }}>Treatments</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
            </select>
            <i class="fas fa-chevron-right dropdown-arrow"></i> 
        </div>

        <div className="dropdown-container">
            <select className="dropdown">
            <option style={{ color: '#1a1a1a' }}>Devices</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
                <option>Petcare</option>
                <option>Farm Animal</option>
            </select>
            <i class="fas fa-chevron-right dropdown-arrow"></i> 
        </div>
        <h3>Filters</h3>
        <div className="brand-content">
                            <h3>Brands</h3>
                            <p>Clear All</p>
                        </div>

        <div className="brand-search-container">
                        <input type="text" placeholder="Search " className="search-input" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                            <path
                                d="M7.4349 15.0988C9.30942 15.0988 11.022 14.4 12.3305 13.2515L14.8651 15.5899C14.9953 15.7096 15.1599 15.7703 15.3227 15.7703C15.5049 15.7703 15.6853 15.6981 15.8208 15.552C16.0734 15.2774 16.0576 14.8489 15.7821 14.5972L13.2633 12.2712C14.2674 11.0031 14.8694 9.40324 14.8694 7.6642C14.8694 3.56407 11.5348 0.229492 7.4347 0.229492C3.33458 0.229492 0 3.56407 0 7.6642C0 11.7643 3.33458 15.0989 7.4347 15.0989L7.4349 15.0988ZM7.4349 1.58114C10.7898 1.58114 13.5178 4.30922 13.5178 7.66408C13.5178 11.0189 10.7898 13.747 7.4349 13.747C4.08005 13.747 1.35196 11.0189 1.35196 7.66408C1.35196 4.30922 4.08005 1.58114 7.4349 1.58114Z"
                                fill="#162C2A"
                            />
                        </svg>
                    </div>
                    
                <div className='checkbox-continer'>
                <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Axiom (178)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Allen (183)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Baidyanath (200)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Axiom (178)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Allen (183)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Adel Pekana (1,824)</label>
                    </div>
                </div>

                <h3>Manufacturers</h3>
        <div className="brand-content">
                            <h3>Brands</h3>
                            <p>Clear All</p>
                        </div>

        <div className="brand-search-container">
                        <input type="text" placeholder="Search " className="search-input" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                            <path
                                d="M7.4349 15.0988C9.30942 15.0988 11.022 14.4 12.3305 13.2515L14.8651 15.5899C14.9953 15.7096 15.1599 15.7703 15.3227 15.7703C15.5049 15.7703 15.6853 15.6981 15.8208 15.552C16.0734 15.2774 16.0576 14.8489 15.7821 14.5972L13.2633 12.2712C14.2674 11.0031 14.8694 9.40324 14.8694 7.6642C14.8694 3.56407 11.5348 0.229492 7.4347 0.229492C3.33458 0.229492 0 3.56407 0 7.6642C0 11.7643 3.33458 15.0989 7.4347 15.0989L7.4349 15.0988ZM7.4349 1.58114C10.7898 1.58114 13.5178 4.30922 13.5178 7.66408C13.5178 11.0189 10.7898 13.747 7.4349 13.747C4.08005 13.747 1.35196 11.0189 1.35196 7.66408C1.35196 4.30922 4.08005 1.58114 7.4349 1.58114Z"
                                fill="#162C2A"
                            />
                        </svg>
                    </div>
                    
                <div className='checkbox-continer'>
                <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Axiom (178)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Allen (183)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Baidyanath (200)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Axiom (178)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Allen (183)</label>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="sample-checkbox" />
                        <label htmlFor="sample-checkbox">Adel Pekana (1,824)</label>
                    </div>
                </div>
    </div>
                <div className="content">
                 
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
