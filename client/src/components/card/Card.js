import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({name, image, route, price}) {

    return (
        <div className='card'>
            <Link to={`/${route}`}>
                <img src={`../../images/${image}.png`} alt='c2 swifts shoe'/>
            </Link>
            
            <div className='card__contents'>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card
