import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='card'>
            <img src='../../images/shoe1-black.png' alt='c2 swifts shoe'/>
            <div className='card__contents'>
                <p>C2 Swifts Black</p>
                <p>$39.99</p>
            </div>
        </div>
    )
}

export default Card
