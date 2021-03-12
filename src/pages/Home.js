import React from 'react'
import './home.css';
import IMG from '../images/IMG1.jpg';
function Home() {
    return (
        <div className="home">
            <section className="home__left">
                <div className="left__outer">
                    <img className="left__img" src={IMG} />
                </div>
            </section>
            <section className="home__right">
                <div className="right__title">
                    <span className="right__title">Mohammed</span> <span className="left__title">Modawe</span>
                </div>
                <p className="right__text">
                    A young ui/ux designer with crazy for mobile a web design 
                </p>
                <p className="right__find">Find Me on</p>
                <div className="right__icon">
                    <a className="icon__item" href="#">facebook</a>
                    <a className="icon__item" href="#">Twitter</a>
                    <a className="icon__item" href="#">Instegrm</a>
                    <a className="icon__item" href="#">Linkedin</a>
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
