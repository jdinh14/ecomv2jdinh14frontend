import chemLogo from '../../assets/logo.png';
import { Link } from "react-router-dom";


import './Header.css';


export default function Header() {

  return (
    <header>
      <Link to="/" id="logocenter">
        <img src={chemLogo} id="logo" alt="website homepage" />
      </Link>
      <nav id="navheadercolor">
        <ul>
          <li className="dropdown">
            <Link to="/products" aria-label="products" >
              Products
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/aboutus" aria-label="aboutus">
              About Us
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/industry">Industries Served</Link>
          </li>
          {/* <li className="dropdown">
            <a href="/new" aria-label="new">
              What's New
            </a>
          </li> */}
          <li className="dropdown">
            <Link to="/contact" aria-label="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}