import React from 'react';

import '../termstyles.css';
import "../styles.css";
import jerryFoto from '../assets/jerry-foto.png';
import banFoto from '../assets/banner.jpeg';


export default function Aboutus() {
    return (
        <div>

                
    <main id="terms">

<img src={banFoto} id="aubanner" alt="bannerau" />

<h1>About the Company</h1>


<p>Reagents has been a leading manufacturer and distributor of specialty chemicals, reagents, and analytical testing solutions for over 50 years.
     With the customer as our primary focus, we strive to earn your business every day by delivering outstanding customer service, technical support,
      and stringent quality standards. Reagents provides a broad portfolio of world class brands manufactured utilizing the highest quality raw materials
       meeting or exceeding specifications established by the American Chemical Society. In the laboratory or on the production floor, our diverse
        product portfolio allows consolidation of all of your scientific product needs.</p>





<h1>Meet the Reagents Team</h1>
    
    
    
    <p>At Reagents, we take pride in our service. We provide a unique opportunity for our customers by manufacturing and sourcing thousands of products,
     all while maintaining a small company atmosphere. We have countless team members in the field, the office, the lab, and the warehouse who work hard
      to get our products in your hands. Take a moment to meet a few!</p>



      <h1>Web Developer</h1>
      <div class="mtjdinh">
        
        <img src={jerryFoto} id="jerry-foto" alt="jerry" />
      

      <p>Jerry has been a proud member of the tech team, helped implement React and Node.js onto our website</p>
      
      </div>

</main>
            
        
           
        </div>
    );
}