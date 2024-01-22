import React from 'react';

import '../termstyles.css'
import "../styles.css";
import ErrorBunny from '../assets/error.webp';

import { Link } from "react-router-dom";



export default function Error() {
    return (
        <div>
            <main id="terms">
<h1>ERROR</h1>
<div  id="logocenter" >
<img src={ErrorBunny} id="logo" alt="Error" /></div>

            <h2 id="logocenter">404: Data not found on server. Please go back. </h2>     
            <Link to="/" id="logocenter">
<h2>Click here to go back.
    </h2>      </Link>  
            </main>
        </div>
    );
}
