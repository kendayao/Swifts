import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectShoppingCart} from '../../redux/cart/cart.selectors'

function Header({shoppingCart}) {
    return (
        <div className='header'>
            <div className='header__SectionOne'>
                <Link to='/'>
                    <img className='header__logo' src="../../logo/main-swifts-logo.png" alt="logo" />
                </Link>
                
                <div className='header__cartIcon'>
                    <div>
                        <Link to='/checkout'>
                            <ShoppingCartOutlinedIcon /> 
                        </Link>
                       
                    </div>
                    <div>
                        <span>{shoppingCart.length}</span>
                    </div>
                </div>
            </div>
            <div className='header__SectionTwo'>
                <div className='header__navs'>
                    <Link to='/' className='header__link'>HOME</Link>
                    <Link to='/shop' className='header__link'>SHOP</Link>
                    <Link to='/about' className='header__link'>ABOUT US</Link>
                    <Link className='header__link'>CONTACT</Link>
                    <Link className='header__link'>FAQ</Link>
                </div>
                <div className='header__login'>
                    <span>ACCOUNT</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    shoppingCart: selectShoppingCart(state)
})

export default connect(mapStateToProps)(Header)
