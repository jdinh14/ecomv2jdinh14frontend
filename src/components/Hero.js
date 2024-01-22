import React from "react";

import './carousel.css';

import acidPic from '../assets/acidbase.png';
import bufferPic from '../assets/Buffers.png';
import saltPic from '../assets/Salts.png';
import solventPic from '../assets/solvents.png';
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <h1>FEATURED CATEGORIES</h1>
      <div className="carousel_FC">
        <div className="carousel_FC-container">
          <div className="carousel_FC-item">
          <Link to="/products?category=acid" aria-label="acid">
              <img src={acidPic} alt="Acid Base" />
              </Link>
            <p className="carousel_FC-description">
            <Link to="/products?category=acid" aria-label="acid">
Acid Base</Link>
            </p>
          </div>
          <div className="carousel_FC-item">
                <Link to="/products?category=buffer" aria-label="buffers">
                    <img src={bufferPic} alt="Buffers" />
                </Link>
                <p className="carousel_FC-description">
                    <Link to="/products?category=buffer">Buffers</Link>
                </p>
            </div>
            <div className="carousel_FC-item">
                <Link to="/products?category=salt" aria-label="salts">
                    <img src={saltPic} alt="Salts" />
                </Link>
                <p className="carousel_FC-description">
                    <Link to="/products?category=salt">Salts</Link>
                </p>
            </div>
            <div className="carousel_FC-item">
                <Link to="/products?category=solvent" aria-label="solvents">
                    <img src={solventPic} alt="Solvents" />
                </Link>
                <p className="carousel_FC-description">
                    <Link to="/products?category=solvent">Solvents</Link>
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

