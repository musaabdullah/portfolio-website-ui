import React from 'react'
import './navbar.css'
function Navbar() {
    return (
        <div className="navbar">
             <div className="navbar__logo">
                 <span className="left">Port</span><span className="right">folio</span>
             </div>
             <div className="navbar__menu">
                 <a className="navbar__item navbar__item--active" href="#">Home</a>
                 <a className="navbar__item" href="#">About</a>
                 <a className="navbar__item" href="#">Portfolio</a>
                 <a className="navbar__item" href="#">Contact</a>
                 <a className="navbar__item" href="#">Testmonials</a>
             </div>
        </div>
    )
}

export default Navbar
