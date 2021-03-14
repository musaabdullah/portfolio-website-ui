import React from 'react'
import IMG from '../images/IMG1.jpg';

function Testimonial({item}) {
    return (
        <>
           
       
         
            <div className="outer">
             <div className="outer__image">
            {/* <img className="testimonail__img" src={IMG} /> */}
            <img className="testimonail__img" src={item.avatar} />
             </div>
            </div>
            <div className="testimonial__name">
                {/* Musa Abdullah */}
                {item.first_name}
            </div>
            <div className="testimonial__text">
                {/* <p>Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements.</p> */}
              <p>{item.email}</p>
            </div>
           
       
       
        </>
    )
}

export default Testimonial
