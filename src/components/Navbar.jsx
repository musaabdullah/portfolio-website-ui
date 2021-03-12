import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="navbar">
             <div className="navbar__logo">
                 <span className="left">Port</span><span className="right">folio</span>
             </div>
             <div className="navbar__menu">
                 <Link className="navbar__item navbar__item--active" to="/">Home</Link>
                 <Link className="navbar__item" to="/about">About</Link>
                 <Link className="navbar__item" to="/portfolio">Portfolio</Link>
                 <Link className="navbar__item" to="/contact">Contact</Link>
                 <Link className="navbar__item" to="/testimonial">Testmonials</Link>
             </div>
        </div>
    )
}

export default Navbar
