import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div className="banner__ad">
                <video className="banner__video" muted>
                    <source src='../../images/swifts-ad.mp4' type='video/mp4'/>
                    video is not supported
                </video>
                <div className='banner__contents'>
                    <h1 className="banner__header">EXPERIENCE COMFORT</h1>
                    <h1 className="banner__subheader">WITH SWIFTS</h1>
                    <button className="banner__button">Shop Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Banner
