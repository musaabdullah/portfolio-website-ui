import React from 'react'
import './portfolio.css';
import * as FIcon from "react-icons/fa";
import IMG from '../images/IMG1.jpg';
import { useEffect, useState } from 'react';
import {portfolioData }from './portfolioData';
import aos from 'aos';
function Portfolio() {
   
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);

    const handleEnd = () => {
        if(end === 5) return 0;
        setEnd(end => end + 2);
        setStart(start => start + 2);
    }
    const handleStart = () => {
        if(start === 0) return ;
        setStart(start => start - 2);
    }

    return (
        <div className="portfolio">
            <div className="container">
            <div className="portfolio__header">
                <div className="header__title">
                    Websites
                </div>
                <div className="header__arrows">
                    <span onClick={handleStart} className="left__icon"><FIcon.FaArrowAltCircleLeft/></span>
                    <span onClick={handleEnd} className="right__icon"><FIcon.FaArrowAltCircleRight/></span>
                </div>
            </div>
            <div className="portfolio__footer">
                {/* <div   className="card">
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
                </div> */}
                { portfolioData.slice(start,end).map((item, index) => (

                    <div key={index} className="card">
                    <div className="card__header">
                        <img src={item.image} />
                    </div>
                    <div className="card__body">
                        <div className="card__body__title">{item.name}</div>
                        <div className="card__body__links">
                            <a href="#">Github link</a>
                            <a href={item.onlineLink}>Online link</a>
                        </div>
                    </div>
                </div>
                        ))
                }
                {/* <div  className="card">
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
          */}
            </div>
            </div>
        </div>
    )
}

export default Portfolio
