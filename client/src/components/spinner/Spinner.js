import React from 'react'
import ReactLoading from 'react-loading';
import './Spinner.css'

function Spinner() {
    return (
        <div className='spinner'>
                <img className='spinner__image' src='../../logo/swifts-logo-one.png' alt='logo'/>  
                <ReactLoading type={'cylon'} color={'#000000'} height={50} width={50} />
        </div>
    )
}

export default Spinner
