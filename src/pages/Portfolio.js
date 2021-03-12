import React from 'react'
import './portfolio.css';
import * as FIcon from "react-icons/fa";
import IMG from '../images/IMG1.jpg';
import { useEffect } from 'react';
import aos from 'aos';
function Portfolio() {
   

    return (
        <div className="portfolio">
            <div className="container">
            <div className="portfolio__header">
                <div className="header__title">
                    Websites
                </div>
                <div className="header__arrows">
                    <span className="left__icon"><FIcon.FaArrowAltCircleLeft/></span>
                    <span className="right__icon"><FIcon.FaArrowAltCircleRight/></span>
                </div>
            </div>
            <div className="portfolio__footer">
                <div   className="card">
                    <div className="card__header">
                        <img src={IMG} />
                    </div>
                    <div   className="card__body">
                        <div className="card__body__title">Project Name</div>
                        <div className="card__body__links">
                            <a href="#">Github link</a>
                            <a href="#">Online link</a>
                        </div>
                    </div>
                </div>

                <div  className="card">
                    <div className="card__header">
                        <img src={IMG} />
                    </div>
                    <div className="card__body">
                        <div className="card__body__title">Project Name</div>
                        <div className="card__body__links">
                            <a href="#">Github link</a>
                            <a href="#">Online link</a>
                        </div>
                    </div>
                </div>
                <div  className="card">
                    <div className="card__header">
                        <img src={IMG} />
                    </div>
                    <div className="card__body">
                        <div className="card__body__title">Project Name</div>
                        <div className="card__body__links">
                            <a href="#">Github link</a>
                            <a href="#">Online link</a>
                        </div>
                    </div>
                </div>
         
            </div>
            </div>
        </div>
    )
}

export default Portfolio
