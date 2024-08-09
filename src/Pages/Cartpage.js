import React, { useState, useEffect } from 'react';

import image1 from '../images/dettole.png';
import image2 from '../images/reccartbanner.png';
import image3 from '../images/dettole.png';
import image4 from '../images/dettole.png';
import '../Styles/Components/Cartpage.css';

const Cartpage = () => {
  const [currentFeatured, setCurrentFeatured] = useState([]);
    const [isFeaturedSliding, setIsFeaturedSliding] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);


  const totalFeatured = Math.ceil(featuredProducts.length / 4);
  const startFeatured = currentIndex * 4;
  const visibleFeatured = featuredProducts.slice(startFeatured, startFeatured + 4);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then(data => {
            const featured = data.products.map(product => ({
                src: product.images[0],
                name: product.title,
                price: product.price,
            }));
            setFeaturedProducts(featured);
            setCurrentFeatured(featured.slice(0, 4));
        });
}, []);

useEffect(() => {
    setCurrentFeatured(visibleFeatured);
}, [currentIndex, featuredProducts]);


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

  return (
    <div className='cart_page'>
    <nav className="breadcrumb">
    <div className="breadcrumb-cart">
        <ul>
            <li><a href="/">Home</a></li>
            <li> &gt; </li>
            <li>Cart</li>
        </ul>
        <div className="wallet-cart">
            <p>points in wallet:<span>1240</span>
            <span>
            <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0C8.05824 0 0 8.05824 0 18C0 27.9418 8.05824 36 18 36C27.9418 36 36 27.9418 36 18C36 8.05824 27.9418 0 18 0ZM18 30.616C11.0329 30.616 5.38395 24.9684 5.38395 18C5.38395 11.0329 11.0316 5.38395 18 5.38395C24.9671 5.38395 30.616 11.0316 30.616 18C30.616 24.9671 24.9671 30.616 18 30.616Z" fill="#FFC33E"/>
<path d="M18.5833 11.1831L20.4299 14.9246L24.5475 15.5224C25.0843 15.6012 25.298 16.2601 24.9107 16.6377L21.9295 19.5435L22.635 23.6545C22.7266 24.1849 22.1689 24.5899 21.6932 24.3392L17.9999 22.3977L14.3067 24.3392C13.831 24.5899 13.2749 24.1849 13.3649 23.6545L14.0704 19.5435L11.0828 16.6313C10.6987 16.2553 10.9108 15.6028 11.4428 15.524L15.5714 14.9229L17.4181 11.1815C17.6575 10.701 18.3455 10.7009 18.5833 11.1831Z" fill="#FFC33E"/>
</svg>
            </span>
            </p>
        </div>
    </div>
</nav>

    <div className="cartimg-page">
      <div className='banner'>
    <div className="cart-item-container">
    <img src={image1} alt="Description of image 1" className="cart-item" />

        <div className="cart-item-text">
        <div className="cart-item-title">
            <h3>Dettol Antiseptic Disinfectant Liquid, 60ml</h3>
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.377 4.75468C20.377 4.45467 20.2582 4.16602 20.0454 3.95431C19.8337 3.74148 19.545 3.62262 19.245 3.62262H15.6009L15.0813 1.54301C14.8549 0.635091 14.0386 -0.00112875 13.1036 1.50815e-06H7.27347C6.33837 -0.00113049 5.52215 0.635091 5.29575 1.54301L4.77612 3.62262H1.13205C0.507167 3.62262 0 4.12979 0 4.75468C0 5.37957 0.507167 5.88673 1.13205 5.88673H1.19092C1.10941 6.20373 1.08224 6.53315 1.10941 6.85919L2.47697 20.5336C2.66942 22.5045 4.32789 24.0055 6.30796 24H14.0694C16.0493 24.0056 17.7079 22.5045 17.9003 20.5336L19.2679 6.85803C19.2951 6.53199 19.2668 6.2037 19.1864 5.8867H19.2453C19.5453 5.8867 19.8339 5.76784 20.0456 5.55502C20.2585 5.34332 20.377 5.05466 20.377 4.75468ZM7.44892 2.26411H12.9269L13.2665 3.62259H7.10924L7.44892 2.26411ZM16.8417 6.10989C16.9707 6.2514 17.0341 6.4427 17.0137 6.63404L15.6462 20.3084C15.5681 21.1201 14.8843 21.7382 14.0692 21.736H6.30781C5.49272 21.7382 4.80894 21.1201 4.73084 20.3084L3.36329 6.6352C3.34404 6.44387 3.4063 6.25369 3.53536 6.11105C3.66441 5.9684 3.84667 5.8869 4.03914 5.8869H16.3381C16.5305 5.88576 16.7126 5.96725 16.8417 6.10989Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M8.37815 9.05664C8.07814 9.05664 7.78949 9.17551 7.57778 9.38833C7.36495 9.60002 7.24609 9.88871 7.24609 10.1887V15.6226C7.24609 16.2475 7.75326 16.7547 8.37815 16.7547C9.00304 16.7547 9.5102 16.2475 9.5102 15.6226V10.1887C9.5102 9.88868 9.39133 9.60003 9.17852 9.38833C8.96682 9.1755 8.67813 9.05664 8.37815 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M11.9992 9.05664C11.6992 9.05664 11.4106 9.17551 11.1989 9.38833C10.986 9.60002 10.8672 9.88871 10.8672 10.1887V15.6226C10.8672 16.2475 11.3744 16.7547 11.9992 16.7547C12.6241 16.7547 13.1313 16.2475 13.1313 15.6226V10.1887C13.1313 9.88868 13.0124 9.60003 12.7996 9.38833C12.5879 9.1755 12.2992 9.05664 11.9992 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
            </svg>
          </div>
          <div className="product-details">
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>By DETTOL</p>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>60Ml Liquid In Bottle</p>
  <div className='price-cart'>
    <div>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#1A1A1A' }}>MRP </span>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(26, 26, 26, 0.5)'
      }}>
        ₹ 234.00
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#228200' }}> ₹150</span>
    </div>
    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#162C2A' }}>30% Off</span>
  </div>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>Delivery by 04 Jul - 06 Jul</p>
</div>
        </div>
      </div>

      <div className="cartitem">
        <div className='cartitem-text'>
        <svg width="37" height="37" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0C8.05824 0 0 8.05824 0 18C0 27.9418 8.05824 36 18 36C27.9418 36 36 27.9418 36 18C36 8.05824 27.9418 0 18 0ZM18 30.616C11.0329 30.616 5.38395 24.9684 5.38395 18C5.38395 11.0329 11.0316 5.38395 18 5.38395C24.9671 5.38395 30.616 11.0316 30.616 18C30.616 24.9671 24.9671 30.616 18 30.616Z" fill="#FFC33E"/>
<path d="M18.5833 11.1831L20.4299 14.9246L24.5475 15.5224C25.0843 15.6012 25.298 16.2601 24.9107 16.6377L21.9295 19.5435L22.635 23.6545C22.7266 24.1849 22.1689 24.5899 21.6932 24.3392L17.9999 22.3977L14.3067 24.3392C13.831 24.5899 13.2749 24.1849 13.3649 23.6545L14.0704 19.5435L11.0828 16.6313C10.6987 16.2553 10.9108 15.6028 11.4428 15.524L15.5714 14.9229L17.4181 11.1815C17.6575 10.701 18.3455 10.7009 18.5833 11.1831Z" fill="#FFC33E"/>
</svg>
<p>Apply Max 50% Discount using Coin Points Available</p>
        </div>
       <div className='discount-detail'>
       <button>Apply discount</button>
       <p>Every Purchase Made Will Be rewarded with 5 Points*</p>
       </div>
        </div>

        </div>

      <div className="cart-item-container">
      <img src={image1} alt="Description of image 1" className="cart-item" />

        <div className="cart-item-text">
        <div className="cart-item-title">
            <h3>Dettol Antiseptic Disinfectant Liquid, 60ml</h3>
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.377 4.75468C20.377 4.45467 20.2582 4.16602 20.0454 3.95431C19.8337 3.74148 19.545 3.62262 19.245 3.62262H15.6009L15.0813 1.54301C14.8549 0.635091 14.0386 -0.00112875 13.1036 1.50815e-06H7.27347C6.33837 -0.00113049 5.52215 0.635091 5.29575 1.54301L4.77612 3.62262H1.13205C0.507167 3.62262 0 4.12979 0 4.75468C0 5.37957 0.507167 5.88673 1.13205 5.88673H1.19092C1.10941 6.20373 1.08224 6.53315 1.10941 6.85919L2.47697 20.5336C2.66942 22.5045 4.32789 24.0055 6.30796 24H14.0694C16.0493 24.0056 17.7079 22.5045 17.9003 20.5336L19.2679 6.85803C19.2951 6.53199 19.2668 6.2037 19.1864 5.8867H19.2453C19.5453 5.8867 19.8339 5.76784 20.0456 5.55502C20.2585 5.34332 20.377 5.05466 20.377 4.75468ZM7.44892 2.26411H12.9269L13.2665 3.62259H7.10924L7.44892 2.26411ZM16.8417 6.10989C16.9707 6.2514 17.0341 6.4427 17.0137 6.63404L15.6462 20.3084C15.5681 21.1201 14.8843 21.7382 14.0692 21.736H6.30781C5.49272 21.7382 4.80894 21.1201 4.73084 20.3084L3.36329 6.6352C3.34404 6.44387 3.4063 6.25369 3.53536 6.11105C3.66441 5.9684 3.84667 5.8869 4.03914 5.8869H16.3381C16.5305 5.88576 16.7126 5.96725 16.8417 6.10989Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M8.37815 9.05664C8.07814 9.05664 7.78949 9.17551 7.57778 9.38833C7.36495 9.60002 7.24609 9.88871 7.24609 10.1887V15.6226C7.24609 16.2475 7.75326 16.7547 8.37815 16.7547C9.00304 16.7547 9.5102 16.2475 9.5102 15.6226V10.1887C9.5102 9.88868 9.39133 9.60003 9.17852 9.38833C8.96682 9.1755 8.67813 9.05664 8.37815 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M11.9992 9.05664C11.6992 9.05664 11.4106 9.17551 11.1989 9.38833C10.986 9.60002 10.8672 9.88871 10.8672 10.1887V15.6226C10.8672 16.2475 11.3744 16.7547 11.9992 16.7547C12.6241 16.7547 13.1313 16.2475 13.1313 15.6226V10.1887C13.1313 9.88868 13.0124 9.60003 12.7996 9.38833C12.5879 9.1755 12.2992 9.05664 11.9992 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
            </svg>
          </div>
          <div className="product-details">
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>By DETTOL</p>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>60Ml Liquid In Bottle</p>
  <div className='price-cart'>
    <div>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#1A1A1A' }}>MRP </span>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(26, 26, 26, 0.5)'
      }}>
        ₹ 234.00
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#228200' }}> ₹150</span>
    </div>
    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#162C2A' }}>30% Off</span>
  </div>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>Delivery by 04 Jul - 06 Jul</p>
</div>

        </div>
      </div>
      <div className="cart-item-container">
        <img src={image1} alt="Description of image 1" className="cart-item" />
        <div className="cart-item-text">
        <div className="cart-item-title">
            <h3>Dettol Antiseptic Disinfectant Liquid, 60ml</h3>
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.377 4.75468C20.377 4.45467 20.2582 4.16602 20.0454 3.95431C19.8337 3.74148 19.545 3.62262 19.245 3.62262H15.6009L15.0813 1.54301C14.8549 0.635091 14.0386 -0.00112875 13.1036 1.50815e-06H7.27347C6.33837 -0.00113049 5.52215 0.635091 5.29575 1.54301L4.77612 3.62262H1.13205C0.507167 3.62262 0 4.12979 0 4.75468C0 5.37957 0.507167 5.88673 1.13205 5.88673H1.19092C1.10941 6.20373 1.08224 6.53315 1.10941 6.85919L2.47697 20.5336C2.66942 22.5045 4.32789 24.0055 6.30796 24H14.0694C16.0493 24.0056 17.7079 22.5045 17.9003 20.5336L19.2679 6.85803C19.2951 6.53199 19.2668 6.2037 19.1864 5.8867H19.2453C19.5453 5.8867 19.8339 5.76784 20.0456 5.55502C20.2585 5.34332 20.377 5.05466 20.377 4.75468ZM7.44892 2.26411H12.9269L13.2665 3.62259H7.10924L7.44892 2.26411ZM16.8417 6.10989C16.9707 6.2514 17.0341 6.4427 17.0137 6.63404L15.6462 20.3084C15.5681 21.1201 14.8843 21.7382 14.0692 21.736H6.30781C5.49272 21.7382 4.80894 21.1201 4.73084 20.3084L3.36329 6.6352C3.34404 6.44387 3.4063 6.25369 3.53536 6.11105C3.66441 5.9684 3.84667 5.8869 4.03914 5.8869H16.3381C16.5305 5.88576 16.7126 5.96725 16.8417 6.10989Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M8.37815 9.05664C8.07814 9.05664 7.78949 9.17551 7.57778 9.38833C7.36495 9.60002 7.24609 9.88871 7.24609 10.1887V15.6226C7.24609 16.2475 7.75326 16.7547 8.37815 16.7547C9.00304 16.7547 9.5102 16.2475 9.5102 15.6226V10.1887C9.5102 9.88868 9.39133 9.60003 9.17852 9.38833C8.96682 9.1755 8.67813 9.05664 8.37815 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M11.9992 9.05664C11.6992 9.05664 11.4106 9.17551 11.1989 9.38833C10.986 9.60002 10.8672 9.88871 10.8672 10.1887V15.6226C10.8672 16.2475 11.3744 16.7547 11.9992 16.7547C12.6241 16.7547 13.1313 16.2475 13.1313 15.6226V10.1887C13.1313 9.88868 13.0124 9.60003 12.7996 9.38833C12.5879 9.1755 12.2992 9.05664 11.9992 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
            </svg>
          </div>
          <div className="product-details">
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>By DETTOL</p>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>60Ml Liquid In Bottle</p>
  <div className='price-cart'>
    <div>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#1A1A1A' }}>MRP </span>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(26, 26, 26, 0.5)'
      }}>
        ₹ 234.00
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#228200' }}> ₹150</span>
    </div>
    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#162C2A' }}>30% Off</span>
  </div>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>Delivery by 04 Jul - 06 Jul</p>
</div>

        </div>
      </div>
      <div className="cart-item-container">
        <img src={image1} alt="Description of image 1" className="cart-item" />
        <div className="cart-item-text">
        <div className="cart-item-title">
            <h3>Dettol Antiseptic Disinfectant Liquid, 60ml</h3>
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.377 4.75468C20.377 4.45467 20.2582 4.16602 20.0454 3.95431C19.8337 3.74148 19.545 3.62262 19.245 3.62262H15.6009L15.0813 1.54301C14.8549 0.635091 14.0386 -0.00112875 13.1036 1.50815e-06H7.27347C6.33837 -0.00113049 5.52215 0.635091 5.29575 1.54301L4.77612 3.62262H1.13205C0.507167 3.62262 0 4.12979 0 4.75468C0 5.37957 0.507167 5.88673 1.13205 5.88673H1.19092C1.10941 6.20373 1.08224 6.53315 1.10941 6.85919L2.47697 20.5336C2.66942 22.5045 4.32789 24.0055 6.30796 24H14.0694C16.0493 24.0056 17.7079 22.5045 17.9003 20.5336L19.2679 6.85803C19.2951 6.53199 19.2668 6.2037 19.1864 5.8867H19.2453C19.5453 5.8867 19.8339 5.76784 20.0456 5.55502C20.2585 5.34332 20.377 5.05466 20.377 4.75468ZM7.44892 2.26411H12.9269L13.2665 3.62259H7.10924L7.44892 2.26411ZM16.8417 6.10989C16.9707 6.2514 17.0341 6.4427 17.0137 6.63404L15.6462 20.3084C15.5681 21.1201 14.8843 21.7382 14.0692 21.736H6.30781C5.49272 21.7382 4.80894 21.1201 4.73084 20.3084L3.36329 6.6352C3.34404 6.44387 3.4063 6.25369 3.53536 6.11105C3.66441 5.9684 3.84667 5.8869 4.03914 5.8869H16.3381C16.5305 5.88576 16.7126 5.96725 16.8417 6.10989Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M8.37815 9.05664C8.07814 9.05664 7.78949 9.17551 7.57778 9.38833C7.36495 9.60002 7.24609 9.88871 7.24609 10.1887V15.6226C7.24609 16.2475 7.75326 16.7547 8.37815 16.7547C9.00304 16.7547 9.5102 16.2475 9.5102 15.6226V10.1887C9.5102 9.88868 9.39133 9.60003 9.17852 9.38833C8.96682 9.1755 8.67813 9.05664 8.37815 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
              <path d="M11.9992 9.05664C11.6992 9.05664 11.4106 9.17551 11.1989 9.38833C10.986 9.60002 10.8672 9.88871 10.8672 10.1887V15.6226C10.8672 16.2475 11.3744 16.7547 11.9992 16.7547C12.6241 16.7547 13.1313 16.2475 13.1313 15.6226V10.1887C13.1313 9.88868 13.0124 9.60003 12.7996 9.38833C12.5879 9.1755 12.2992 9.05664 11.9992 9.05664Z" fill="#1A1A1A" fill-opacity="0.5"/>
            </svg>
          </div>
          <div className="product-details">
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>By DETTOL</p>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>60Ml Liquid In Bottle</p>
  <div className='price-cart'>
    <div>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#1A1A1A' }}>MRP </span>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(26, 26, 26, 0.5)'
      }}>
        ₹ 234.00
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#228200' }}> ₹150</span>
    </div>
    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#162C2A' }}>30% Off</span>
  </div>
  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '15px', color: 'rgba(26, 26, 26, 0.7)' }}>Delivery by 04 Jul - 06 Jul</p>
</div>

        </div>
      </div>

    </div>

    <div className="featuredcart-product">
                <div className="featuredcart-text">
                    <h3>Featured Products</h3>
                </div>
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
                                   <svg className="heart-icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.25743 0C3.16174 0 2.06609 0.429157 1.23935 1.29438C-0.414182 3.0248 -0.412049 5.79765 1.23935 7.52922L7.55106 14.1485C7.60851 14.2088 7.67761 14.2568 7.75416 14.2896C7.83071 14.3224 7.91313 14.3393 7.99641 14.3393C8.07969 14.3393 8.1621 14.3224 8.23865 14.2896C8.3152 14.2568 8.3843 14.2088 8.44176 14.1485C10.5472 11.945 12.6544 9.73909 14.7599 7.53562C16.4134 5.80517 16.4134 3.03124 14.7599 1.30079C13.1064 -0.429649 10.3772 -0.429686 8.7237 1.30079L7.99961 2.05051L7.27553 1.29438C6.44877 0.429161 5.35312 0 4.25743 0ZM4.25743 1.20467C5.02229 1.20467 5.79234 1.51985 6.39125 2.14663L7.55748 3.37052C7.61493 3.4308 7.68403 3.4788 7.76058 3.51159C7.83713 3.54438 7.91954 3.56128 8.00281 3.56128C8.08609 3.56128 8.1685 3.54438 8.24505 3.51159C8.3216 3.4788 8.3907 3.4308 8.44815 3.37052L9.60798 2.15303C10.8058 0.899463 12.6714 0.899492 13.8692 2.15303C15.067 3.40657 15.067 5.43624 13.8692 6.68978C11.913 8.73705 9.95583 10.7812 7.99961 12.8285L2.13003 6.68339C0.932858 5.42809 0.932222 3.40013 2.13003 2.14663C2.72892 1.51986 3.49257 1.20467 4.25743 1.20467Z" fill="#1A1A1A"/>
  </svg>
                                    <img src={item.src} alt={item.name} />
                                    <div className="feature-info">
                                        <div className="feature-name">{item.name}</div>
                                        <div className="feature-price">₹{item.price}</div>
                                        <button className="addto-cart">Add to Cart</button>
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
            </div>
    </div>
  );
};

export default Cartpage;
