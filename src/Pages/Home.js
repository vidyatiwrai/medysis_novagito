import React, { useState } from 'react';
import "../Styles/Components/Homepage.css";
import babybanner from "../images/babybanner.png";
import dettolproduct from "../images/dettole.png";
import ceraveproduct from "../images/carevproduct.png";
import featuredImage from "../images/Featured.png";
import catsummer from "../images/summer.png"
import eyecare from "../images/eye.png"
import brandname from "../images/brandname.png";
import nycilproduct from  "../images/nycilproduct.png"

const HomePage = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [isfeatured,setIsfeatured] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    
    const [currentbrand, setCurrentbrand] = useState(0);
    const [isbrand, setIsbrand] = useState(false);

    const carouselImages = [
        babybanner,
        'https://cdn.freepixel.com/preview/free-photos-happy-mothers-day-celebration-social-media-banner-a-young-woman-holding-a-newborn-baby-in-her-arms-e-preview-1101528255.jpg',
        'https://cdn.freepixel.com/preview/free-photos-happy-mothers-day-celebration-social-media-banner-a-woman-possibly-a-young-mother-is-holding-a-baby-preview-1101528283.jpg'
    ];

   

    const prevCarouselSlide = () => {
        setCarouselIndex(prevIndex => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
    };

    const nextCarouselSlide = () => {
        setCarouselIndex(prevIndex => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    };


    const prevfeatured = () => {
        if (isfeatured) return;
        setIsfeatured(true);
        setTimeout(() => {
            setFeaturedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalfeatured - 1));
            setIsfeatured(false);
        }, 500); 
      };
      
      const nextfeatured = () => {
      if (isfeatured) return;
      setIsfeatured(true);
      setTimeout(() => {
          setFeaturedIndex((prevIndex) => (prevIndex + 1) % totalfeatured);
          setIsfeatured(false);
      }, 500); 
      };


    const prevSlide = () => {
      if (isSliding) return;
      setIsSliding(true);
      setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
          setIsSliding(false);
      }, 500); 
  };

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setIsSliding(false);
    }, 500); // Adjust the timing to match your animation duration
};


const prevbrand = () => {
  if (isbrand) return;
  setIsbrand(true);
  setTimeout(() => {
      setCurrentbrand((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalbrand - 1));
      setIsbrand(false);
  }, 500); 
};

const nextbrand = () => {
if (isbrand) return;
setIsbrand(true);
setTimeout(() => {
    setCurrentbrand((prevIndex) => (prevIndex + 1) % totalbrand);
    setIsbrand(false);
}, 500); 
};

    const products = [
        { name: "Product 1", price: "$10.00", imgSrc: nycilproduct },
        { name: "Product 2", price: "$20.00", imgSrc: nycilproduct },
        { name: "Product 3", price: "$30.00", imgSrc: nycilproduct },
        { name: "Product 4", price: "$40.00", imgSrc: nycilproduct },
        { name: "Product 5", price: "$50.00", imgSrc: nycilproduct },
        { name: "Product 6", price: "$60.00", imgSrc: nycilproduct },
        { name: "Product 7", price: "$70.00", imgSrc: nycilproduct },
        { name: "Product 8", price: "$80.00", imgSrc: nycilproduct },
        { name: "Product 9", price: "$90.00", imgSrc: nycilproduct },
      ];

      const featureImages = [
        { src: dettolproduct, alt: 'Product 1', name: 'dettole', price: '345' },
        { src: ceraveproduct, alt: 'Product 2', name: 'carev', price: '345' },
        { src: dettolproduct, alt: 'Product 3', name: 'dettole', price: '345' },
        { src: ceraveproduct, alt: 'Product 4', name: 'carev', price: '345' },
        { src: dettolproduct, alt: 'Product 5', name: 'dettole', price: '345'  },
        { src: ceraveproduct, alt: 'Product 6', name: 'dettole', price: '345'  },
        { src: dettolproduct, alt: 'Product 7', name: 'carev', price: '345'  },
        { src: ceraveproduct, alt: 'Product 8', name: 'dettole', price: '345'  },
        { src: dettolproduct, alt: 'Product 9', name: 'carev' , price: '345' },
        { src: ceraveproduct, alt: 'Product 10', name: 'dettole', price: '345'  },
    ];

      const items = [
        { src: catsummer, alt: 'Product 1', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 2', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 3', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 4', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 5', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 6', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 7', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 8', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 9', name: 'Summer Essential' },
        { src: catsummer, alt: 'Product 10', name: 'Summer Essential' },
    ];

    const concernimg = [
      {src: eyecare, alt: 'concern 1', name: 'Eyecare'},
      {src: eyecare, alt: 'concern 2', name: 'Eyecare'},
      {src: eyecare, alt: 'concern 3', name: 'Eyecare'},
      {src: eyecare, alt: 'concern 4', name: 'Eyecare'},
      {src: eyecare, alt: 'concern 5', name: 'Eyecare'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
    ]

    const brandimage = [
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
      {src: brandname, alt: 'concern 6', name: 'Brand'},
    ]


    const totalfeatured = Math.ceil(featureImages.length / 4);
    const startfeatured = currentIndex * 4;
    const currentfeatured = featureImages.slice(startfeatured, startfeatured + 4);



    const totalSlides = Math.ceil(concernimg.length / 5);
    const startIndex = currentIndex * 5;
    const currentImages = concernimg.slice(startIndex, startIndex + 5);


    const totalbrand = Math.ceil(brandimage.length / 5);
    const startbrand = currentbrand * 5;
    const currentimages = brandimage.slice(startbrand, startbrand + 5);

    const circlesToShow = totalfeatured;

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
                <h3>Featured products</h3>
            </div>
            <img className="additional-image" src={featuredImage} alt="Additional Image" />
            <div className="feature-img">
                <div className="arrow-left-featured" onClick={prevfeatured}>
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                    </svg>
                </div>
                <div className="feature-container-wrapper">
                    <div className={`feature-container ${isfeatured ? 'sliding' : ''}`} onAnimationEnd={() => setIsfeatured(false)}>
                        {currentfeatured.map((item, index) => (
                            <div key={index} className="feature-item">
                                <img src={item.src} alt={item.alt} />
                                <div className="feature-info">
                                    <div className="feature-name">{item.name}</div>
                                    <div className="feature-price">₹{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="arrow-right-featured" onClick={nextfeatured}>
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                    </svg>
                </div>
            </div>
            <div className="button-and-circles">
                <div className="circles">
                    {Array.from({ length: circlesToShow }).map((_, index) => (
                        <div
                            key={index}
                            className="circle"
                            style={{ backgroundColor: index === featuredIndex ? '#162C2A' : '#EAEAEA' }}
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
                {items.map((item, index) => (
                    <div key={index} className="category-item">
                        <img src={item.src} alt={item.alt} />
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
                <div className="concern-left-arrow" onClick={prevSlide}>
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
                    </svg>
                </div>
                <div className="concern-container-wrapper">
                    <div className={`concern-container ${isSliding ? 'sliding' : ''}`} onAnimationEnd={() => setIsSliding(false)}>
                        {currentImages.map((item, index) => (
                            <div key={index} className="category-item">
                                <img src={item.src} alt={item.alt} />
                                <div className="concern-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="concern-right-arrow" onClick={nextSlide}>
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
                    </svg>
                </div>
            </div>
        </div>


    <div className="shop-brand">
      <div className="brand-text"><h3>Shop by brands</h3></div>
      <div className="brand-img">
        <div className="brand-left-arrow" onClick={prevbrand}>
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 30L4.24264 20.2426C1.89949 17.8995 1.89949 14.1005 4.24264 11.7574L14 2" stroke="#7B7B7B" strokeWidth="3"/>
          </svg>
        </div>
        <div className="brand-container-wrapper">
                    <div className={`brand-container ${isbrand ? 'sliding' : ''}`} onAnimationEnd={() => setIsbrand(false)}>
                        {currentimages.map((item, index) => (
                            <div key={index} className="category-item">
                                <img src={item.src} alt={item.alt} />
                                <div className="brand-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
        <div className="brand-right-arrow" onClick={nextbrand}>
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L11.7574 11.7574C14.1005 14.1005 14.1005 17.8995 11.7574 20.2426L2 30" stroke="#7B7B7B" strokeWidth="3"/>
          </svg>
        </div>
      </div>
      <div className="brand-button"><button>View All</button></div>
    </div>


    <div className="all-products-container">
      <div className="all-text"><h3>All Products</h3></div>
      <div className="all-products">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
      <div className="product-button"><button>View All</button></div>
    </div>  
            </div>
   ) 
};
export default HomePage;
