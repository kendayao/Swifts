import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className='header'>
            <div className='header__SectionOne'>
                <img className='header__logo' src="../../logo/swifts-logo-one.png" alt="logo" />
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
                    <span>HOME</span>
                    <span>SHOP</span>
                    <span>ABOUT US</span>
                    <span>CONTACT</span>
                    <span>FAQ</span>
                </div>
                <div className='header__login'>
                    <span>ACCOUNT</span>
                </div>
            </div>
        </div>
    )
}

export default Header
