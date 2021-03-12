import React from 'react'
import './contact.css';
function Contact() {
    return (
        <div className="contact">
            <div className="contact__header">
                Let's Make Something Great Together
            </div>
            <form className="contact__form">
                <div className="form__person">
                    <input type="text" className="form__name" placeholder="Name"></input>
                    <input type="email" className="form__email" placeholder="Email"></input>
                </div>
                <div className="form__group">
                    <input type="text" className="form__subject" placeholder="Subject"></input>
                    <input type="text" className="form__description" placeholder="Describe about your project"></input>
                </div>
                <div className="form__btn">
                    <button className="btn__hire">Hire Me</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
