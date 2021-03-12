import React from 'react'
import "./testimonial.css";
import IMG from '../images/IMG1.jpg';
function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__header">
                Valuable Testimonial
            </div>
            <p className="testimonail__subheader">
                See People Say About Me
            </p>
            <div className="outer">
             <div className="outer__image">
            <img className="testimonail__img" src={IMG} />
             </div>
            </div>
            <div className="testimonial__name">
                Musa Abdullah
            </div>
            <div className="testimonial__text">
                <p>Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements.</p>
            </div>
        </div>
    )
}

export default Testimonial
