import "./header.css";
import BEE from "../assets/bee8.png";
import { useState } from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="" style={{}}>
   
      <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="header-p" style={{textDecoration: 'none'}}>
      <img className="logo" style={{}} src={BEE} alt="Honeybee Logo" />
      </a>
        <a href="/" className="header-p br" style={{textDecoration: 'none'}}>Honeybee Web Solutions</a></div>
   
      <button className="menu-toggle" onClick={toggleMenu}>
      
        ☰
      </button>
      
  
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><a className="header-p" href="/services">Services</a></li>
        
        <li><a className="header-p" href="/contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
}
