import React from 'react'
import "./testimonial.css";
import IMG from '../images/IMG1.jpg';
import TestimonialComponent from '../components/Testimonial';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Testimonial() {

    const [items, setitems] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://reqres.in/api/users')
            console.log(res.data.data);
            setitems(res.data.data);
        }
        fetchData();
    }, [])
    return (
       
        <>
       
             <div className="testimonial">
             <div className="testimonial__header">
             Valuable Testimonial
         </div>
         <p className="testimonail__subheader">
             See People Say About Me
         </p>
           { items &&
           <div>
            {items.slice(0,3).map(item => {
            return  <TestimonialComponent item={item} key={item.id} />
        })}
        </div>
    }      
    </div>
  </>
    )
}

export default Testimonial
