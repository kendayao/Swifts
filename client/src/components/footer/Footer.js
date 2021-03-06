import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {

    var date= new Date();
    var year=date.getFullYear();
    
    return (
        <div className='footer'>
            <div className='footer__topSection'>
                <div className='footer__contact'>
                    <h4>CONTACT</h4>
                    <p>452 Hamilton Steet, Los Angeles, CA 90021</p>
                    <p>453-433-4222</p>
                    <p>support@swifts.com</p>
                </div>
                <div className='footer__support'>
                    <h4>SUPPORT</h4>
                    <Link className='footer__link' to='/terms-and-conditions'>
                        <p>Terms and Conditions</p>
                    </Link>
                    <Link className='footer__link' to='/privacy-policy'>
                        <p>Privacy Policy</p>
                    </Link>
                    <Link className='footer__link' to='/return-policy'>
                        <p>Return Policy</p>
                    </Link>
                    <Link className='footer__link' to='/frequently-asked-questions'>
                        <p>Frequently Asked Questions</p>
                    </Link>
                </div>
                <div className='footer__about'>
                    <h4>ABOUT</h4>
                    <Link className='footer__link' to='/about'><p>About Us</p></Link>
                    <Link className='footer__link' to='/contact'><p>Contact</p></Link>
                </div>
            </div>

            <div className='footer__bottomSection'>
                <p>&#169;{year}, Swifts</p>
            </div>

        </div>
    )
}

export default Footer;