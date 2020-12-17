import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__topSection'>
                <div className='footer__contact'>
                    <h4>CONTACT</h4>
                    <p>452 Hamilton Steet, Los Angeles, CA 90021</p>
                    <p>453-433-4222</p>
                    <p>swifts@support.com</p>
                </div>
                <div className='footer__support'>
                    <h4>SUPPORT</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Return Policy</p>
                    <p>Frequently Asked Questionss</p>
                </div>
                <div className='footer__about'>
                    <h4>ABOUT</h4>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
            </div>
            <hr />
            <div className='footer__bottomSection'>
                <p>&#169;2020, Swifts</p>
                <p>credit card icon</p>
            </div>

        </div>
    )
}

export default Footer;