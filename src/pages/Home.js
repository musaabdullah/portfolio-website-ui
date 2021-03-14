import React from 'react'
import './home.css';
import * as AIcon from "react-icons/ai";
import IMG from '../images/IMG1.jpg';
import {useEffect} from 'react';
import aos from 'aos';
function Home() {

   
    return (
        <div    className="home">
            <section className="home__left">
                <div className="left__outer">
                    <img className="left__img" src={IMG} />
                </div>
            </section>
            <section className="home__right">
                <div className="right__title">
                    <span className="right__title">Musa</span> <span className="left__title">Abdullah</span>
                </div>
                <p className="right__text">
                   Javascript developer | Node js, React js and Vue js
                </p>
                <p className="right__find">Find Me on</p>
                <div className="right__icon">
                    <a className="icon__item facebook" href="#"><AIcon.AiFillFacebook/></a>
                    <a className="icon__item twitter" href="https://twitter.com/musaabdo18"><AIcon.AiFillTwitterSquare/></a>
                    <a className="icon__item github" href="https://github.com/musaabdullah"><AIcon.AiFillGithub/></a>
                    <a className="icon__item linkedin" href="https://www.linkedin.com/in/musa-abdullah-5aa302152/"><AIcon.AiFillLinkedin/></a>
                </div>
                <div className="right__btn">
                    <button className="btn btn-active">Hire Me</button>
                    <button className="btn ">Portfolio</button>
                </div>
            </section>
        </div>
    )
}

export default Home
