import React from 'react'
import './Card.css'


function Card({name, image, price}) {


    return (
        <div className='card'>
            <img src={`../../images/${image}.png`} alt='c2 swifts shoe'/>
            <div className='card__contents'>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card
