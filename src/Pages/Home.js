import React, { useState, useEffect } from 'react';
import "../Styles/Components/Homepage.css";
import babybanner from "../images/babybanner.png";
import featuredImage from "../images/Featured.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [carouselImages, setCarouselImages] = useState([babybanner]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [currentFeatured, setCurrentFeatured] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFeaturedSliding, setIsFeaturedSliding] = useState(false);
    const [categories, setCategories] = useState([]);
    const [concerns, setConcerns] = useState([]);
    const [currentConcerns, setCurrentConcerns] = useState([]);
    const [currentConcernIndex, setCurrentConcernIndex] = useState(0);
    const [brands, setBrands] = useState([]);
    const [currentBrands, setCurrentBrands] = useState([]);
    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
    const [isSlidingConcerns, setIsSlidingConcerns] = useState(false);
    const [isSlidingBrands, setIsSlidingBrands] = useState(false);
    const [products, setProducts] = useState([]);

    const totalFeatured = Math.ceil(featuredProducts.length / 4);
    const startFeatured = currentIndex * 4;
    const visibleFeatured = featuredProducts.slice(startFeatured, startFeatured + 4);

    const totalConcerns = Math.ceil(concerns.length / 5);
    const startConcerns = currentConcernIndex * 5;
    const visibleConcerns = concerns.slice(startConcerns, startConcerns + 5);

    const totalBrands = Math.ceil(brands.length / 5);
    const startBrands = currentBrandIndex * 5;
    const visibleBrands = brands.slice(startBrands, startBrands + 5);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(data => {
                const productImages = data.products.map(product => product.images[0]);
                console.log(data.product)
                setCarouselImages(prevImages => [...prevImages, ...productImages]);

                const featured = data.products.map(product => ({
                    src: product.images[0],
                    name: product.title,
                    price: product.price,
                }));
                setFeaturedProducts(featured);
                setCurrentFeatured(featured.slice(0, 4));

                setCategories(data.products.map(product => ({
                    src: product.images[0],
                    name: product.category,
                })));

                setConcerns(data.products.map(product => ({
                    src: product.images[0],
                    name: product.brand,
                })));
                setCurrentConcerns(data.products.slice(0, 5).map(product => ({
                    src: product.images[0],
                    name: product.brand,
                })));

                setBrands([...new Set(data.products.map(product => ({
                    src: product.images[0],
                    name: product.brand,
                })))]);

                setCurrentBrands(data.products.slice(0, 5).map(product => ({
                    src: product.images[0],
                    name: product.brand,
                })));

                setProducts(data.products.map(product => ({
                    imgSrc: product.images[0],
                    name: product.title,
                    price: product.price
                })));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        setCurrentFeatured(visibleFeatured);
    }, [currentIndex, featuredProducts]);

    useEffect(() => {
        setCurrentConcerns(visibleConcerns);
    }, [currentConcernIndex, concerns]);

    useEffect(() => {
        setCurrentBrands(visibleBrands);
    }, [currentBrandIndex, brands]);

    const prevCarouselSlide = () => {
        setCarouselIndex(prevIndex => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
    };

    const nextCarouselSlide = () => {
        setCarouselIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    };

    const prevFeatured = () => {
        if (isFeaturedSliding) return;
        setIsFeaturedSliding(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex === 0 ? totalFeatured - 1 : prevIndex - 1));
            setIsFeaturedSliding(false);
        }, 500);
    };

    const nextFeatured = () => {
        if (isFeaturedSliding) return;
        setIsFeaturedSliding(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalFeatured);
            setIsFeaturedSliding(false);
        }, 500);
    };

    const prevConcerns = () => {
        if (isSlidingConcerns) return;
        setIsSlidingConcerns(true);
        setTimeout(() => {
            setCurrentConcernIndex(prevIndex => (prevIndex === 0 ? totalConcerns - 1 : prevIndex - 1));
            setIsSlidingConcerns(false);
        }, 500);
    };

    const nextConcerns = () => {
        if (isSlidingConcerns) return;
        setIsSlidingConcerns(true);
        setTimeout(() => {
            setCurrentConcernIndex(prevIndex => (prevIndex + 1) % totalConcerns);
            setIsSlidingConcerns(false);
        }, 500);
    };

    const prevBrands = () => {
        if (isSlidingBrands) return;
        setIsSlidingBrands(true);
        setTimeout(() => {
            setCurrentBrandIndex(prevIndex => (prevIndex === 0 ? totalBrands - 1 : prevIndex - 1));
            setIsSlidingBrands(false);
        }, 500);
    };
  const nextBrands = () => {
        if (isSlidingBrands) return;
        setIsSlidingBrands(true);
        setTimeout(() => {
            setCurrentBrandIndex(prevIndex => (prevIndex + 1) % totalBrands);
            setIsSlidingBrands(false);
        }, 500);
    };

    return (
        <div>
            <header className="header">
                <svg className="arrow-left" width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={prevCarouselSlide}>
                    <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                </svg>
                {carouselImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`image ${index === carouselIndex ? 'active' : ''}`}
                    />
                ))}
                <svg className="arrow-right" width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={nextCarouselSlide}>
                    <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                </svg>
            </header>

            <div className="featured-product">
                <div className="featured-text">
                    <h3>Featured Products</h3>
                </div>
                <img className="additional-image" src={featuredImage} alt="Additional Image" />
                <div className="feature-img">
                    <div className="arrow-left-featured" onClick={prevFeatured}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="feature-container-wrapper">
                        <div className={`feature-container ${isFeaturedSliding ? 'sliding' : ''}`} onAnimationEnd={() => setIsFeaturedSliding(false)}>
                            {currentFeatured.map((item, index) => (
                                <div key={index} className="feature-item">
                                    <img src={item.src} alt={item.name} />
                                    <div className="feature-info">
                                        <div className="feature-name">{item.name}</div>
                                        <div className="feature-price">₹{item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="arrow-right-featured" onClick={nextFeatured}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className="button-and-circles">
                    <div className="circles">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="circle"
                                style={{ backgroundColor: index === currentIndex ? '#162C2A' : '#EAEAEA' }}
                            />
                        ))}
                    </div>
                    <button className="featured-button">View All</button>
                </div>
            </div>

            <div className="shop-categories">
                <div className="shop-text">
                    <h3>Shop by Categories</h3>
                </div>
                <div className="categories-container">
                    {categories.map((item, index) => (
                        <div key={index} className="category-item">
                            <img src={item.src} alt={item.name} />
                            <div className="categ-name">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="shop-concern">
                <div className="concern-text">
                    <h3>Shop by Concern</h3>
                </div>
                <div className="concern-img">
                    <div className="concern-left-arrow" onClick={prevConcerns}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="concern-container-wrapper">
                        <div className={`concern-container ${isSlidingConcerns ? 'sliding' : ''}`} onAnimationEnd={() => setIsSlidingConcerns(false)}>
                            {currentConcerns.map((item, index) => (
                                <div key={index} className="category-item">
                                    <img src={item.src}  />
                                    <div className="concern-name">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="concern-right-arrow" onClick={nextConcerns}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="shop-brands">
                <div className="brand-text">
                    <h3>Shop by Brands</h3>
                </div>
                <div className="brand-container">
                    <div className="arrow-left-brand" onClick={prevBrands} style={{cursor:'pointer'}}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="brand-slider">
                        <div className={`brand-content ${isSlidingBrands ? 'sliding' : ''}`} onAnimationEnd={() => setIsSlidingBrands(false)}>
                            {currentBrands.map((item, index) => (
                                <div key={index} className="brand-item">
                                    <img src={item.src} alt={item.name} />
                                    <div className="brand-name">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="arrow-right-brand" onClick={nextBrands} style={{cursor:'pointer'}}>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className="brand-button">
                 <Link to='/shopbrand'>
                 <button>View All</button>
                 </Link>
                </div>
            </div>

            <div className="all-products-container">
                <div className="all-text">
                    <h3>All Products</h3>
                </div>
                <div className="all-products">
                    {products.map((product, index) => (
                        <div className="product-item" key={index}>
                            <img src={product.imgSrc} alt={product.name} />
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">₹{product.price}</div>
                        </div>
                    ))}
                </div>
                <div className="product-button">
                    <button>View All</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
