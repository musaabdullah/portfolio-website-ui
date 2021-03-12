import React from 'react'
import './about.css';
import IMG from '../images/IMG1.jpg';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
function About() {

  
    return (
        <div   className="about">
            <div className="about__left">
                <div className="about__header">
                    About Me
                </div>
                <p className="about__text">
                Creative web developer dedicated to developing and optimizing interactive, user-friendly, and feature-rich websites. leverage analytical skills andstrong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish. 
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
