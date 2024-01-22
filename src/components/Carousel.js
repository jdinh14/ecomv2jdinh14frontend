import React, { useState, useEffect } from 'react';
import './carousel.css';
import isoCertPic from '../assets/ISOcert.jpeg'; 
import rnePic from '../assets/RNE.jpeg'; 
import rpomPic from '../assets/RPOM.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { src: isoCertPic, description: "ACCREDITED: ISO/IEC 17025:2017" },
        { src: rnePic, description: "FEATURED PRODUCT: PH BUFFER" },
        { src: rpomPic, description: "NEW BRAND: ADVANCE CHEM" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 2500); 
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(${currentIndex * -100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel-slide" key={index}>
                        <a href="/">
                            <img src={slide.src} alt={`Image ${index + 1}`} />
                            <p className="image-description">{slide.description}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;


