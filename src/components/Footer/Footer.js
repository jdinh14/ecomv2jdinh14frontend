import './Footer.css';

import facebookIcon from '../../assets/fbicon.svg'; 
import instagramIcon from '../../assets/igicon.svg'; 
import twitterIcon from '../../assets/twicon.svg'; 
import EmailForm from '../Form'
import { Link } from "react-router-dom";



export default function Footer() {

  return (
    <footer>
      <div className="grid">
        <article className="contact-info">
          <h2>CUSTOMER SERVICES</h2>
          <ul className="#">
            <li>
              <Link to="/contact" aria-label="contact">
                <h3>Contact Us</h3>
              </Link>
            </li>
          </ul>
  
 
        </article>
        <article className="contact-info">
        <h2>SOCIAL MEDIA</h2>
          <div className="social-media-icons">
           
              
                {" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  title="Follow us on Facebook"
                  aria-label="facebook"
                >
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>
             
                {" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  title="Follow us on Instagram"
                  aria-label="instagram"
                >
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>
             
                {" "}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  title="Follow us on Twitter"
                  aria-label="twitter"
                >
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
              
           
          </div>
        </article>
        <article className="contact-info">
        <h2>GET IN TOUCH</h2>
          <ul className="#">
            <li>Reagents</li>
            <li>P.O. Box 788</li>
            <li>Belmont, NC 28012</li>
            <li>1-800-732-8484</li>
            <li>
              <a
                href="mailto:orders@tcpanalytical.com"
                id="emailcolor"
                aria-label="email"
              >
                orders@tcpanalytical.com
              </a>
            </li>
          </ul>
          </article>
        
      
     
      </div>
      <div className="copyright">
        <p>
          Reagents is part of TCP Analytical. TCP Analytical is dedicated to making
          research and production simpler, faster, and more reliable through a
          focused portfolio of chemical, research reagents, and laboratory product
          companies in the USA &amp; Canada. Learn more at{" "}
          <a href="https://www.tcpanalytical.com/" target="_blank">
            www.tcpanalytical.com
          </a>
        </p>
      </div>
    </footer>

  );
}