import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className='about__body'>
                <div className='about__header'>
                    <p className='about__title'>About us</p>
                </div>
                <div className='about__paragraph'>
                    <p>
                    Here at Swifts we like things simple! Who doesn’t? The founder of Swifts has a simple fashion style. One day while browsing around different shoe stores looking for a pair of casual walking shoes, he noticed that there wasn’t a huge selection of simple styled shoes. Most of the shoes he saw were flashy with over the top bright colors. The shoes that he saw that matched his style were from popular brands,  very expensive, and not very comfortable. This is when Swifts was born! 
                    </p><br/>

                    <strong>Our Mission</strong>
                    <p>Our mission is to provide affordable, minimal-looking, and comfortable shoes for any lifestyle. We keep our shoes simple yet fashionable by providing good fit, limited colors palettes, and a modern look. We keep the environment in mind. All our products are made with environmentally friendly materials. </p><br/>

                    <strong>What We Value</strong>
                    <ul>
                        <li>Commitment to Customers</li>
                        <li>Quality</li>
                        <li>Trust</li>
                        <li>Community</li>
                    </ul>

                </div>
            </div>  
        </div>
    )
}

export default About
