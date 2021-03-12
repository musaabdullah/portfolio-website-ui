import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
function Navbar({handleTestimonial,testimonial,handPortfolio,handleAbout,handleHome,handleContact,portfolio,about,contact,home}) {
    return (
        <div className="navbar">
             <div className="navbar__logo">
                 <span className="left">Port</span><span className="right">folio</span>
             </div>
             <div className="navbar__menu">
                 <Link onClick={handleHome} className={`navbar__item ${home? "navbar__item--active": ""}`} to="/">Home</Link>
                 <Link onClick={handleAbout} className={`navbar__item ${about? "navbar__item--active": ""}`} to="/about">About</Link>
                 <Link onClick={handPortfolio} className={`navbar__item ${portfolio? "navbar__item--active": ""}`} to="/portfolio">Portfolio</Link>
                 <Link onClick={handleContact} className={`navbar__item ${contact? "navbar__item--active": ""}`} to="/contact">Contact</Link>
                 <Link onClick={handleTestimonial} className={`navbar__item ${testimonial? "navbar__item--active": ""}`} to="/testimonial">Testmonials</Link>
             </div>
        </div>
    )
}

export default Navbar
