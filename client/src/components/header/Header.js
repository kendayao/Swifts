import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className='header'>
            <div className='header__SectionOne'>
                <img className='header__logo' src="../../logo/swifts-logo.png" alt="logo" />
                <div className='header__cartIcon'>
                    <div>
                    <ShoppingCartOutlinedIcon />    
                    </div>
                    <div>
                        <spann>0</spann>
                    </div>
                </div>
            </div>
           
            <div className='header__SectionTwo'>
                <div className='header__navs'>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>About Us</span>
                    <span>Contact</span>
                    <span>FAQ</span>
                </div>
                <div className='header__login'>
                    <span>Account</span>
                </div>
            </div>
        </div>
    )
}

export default Header
