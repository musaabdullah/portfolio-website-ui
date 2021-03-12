import React from 'react'
import './about.css';
import IMG from '../images/IMG1.jpg';

function About() {
    return (
        <div className="about">
            <div className="about__left">
                <div className="about__header">
                    About Me
                </div>
                <p className="about__text">
                    Lorem ipsum dolor sit amet, consecletur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/><br/>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="btn__cv">
                    Download CV
                </button>
            </div>
            <div className="about__right">
                <div className="about__outer">
                    <div className="outer__img">
                        <img src={IMG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
