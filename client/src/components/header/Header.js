import React, {useState, useEffect} from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectShoppingCartCount} from '../../redux/cart/cart.selectors'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {Input } from '@material-ui/core';
import {auth} from '../../firebase/firebase'
import MenuIcon from '@material-ui/icons/Menu';

// Modal Materila UI styling
function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 350,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #dbdbdb',
      borderRadius: '3px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none"
    },
  }));

function Header({shoppingCartCount}) {

    const classes=useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [openSignIn, setOpenSignIn]=useState(false);
    const [openSignUp, setOpenSignUp]=useState(false);
    const [user, setUser]=useState('')
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [toggleDropdown, setToggleDropdown]=useState(false);

    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                setUser(authUser)
            }else{
                setUser('')
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const signUp=async event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser=>{
            if(authUser){
                setOpenSignUp(false)
            }
        }).catch((error)=>alert(error.message))
        setEmail('')
        setPassword('')
    }

    function signIn(event){
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error)=>alert(error.message))
        setEmail('')
        setPassword('')
        setOpenSignIn(false)
    }

    return (
        <div className='header'>

    <Modal
        open={openSignIn}
        // on close listens to clicks outside the modal. materialize built that for us
        onClose={()=>setOpenSignIn(false)}
      >
          
         <div style={modalStyle} className={classes.paper}>
         <center>
              <img className='header__modal-logo' src='../../logo/main-swifts-logo.png' atl='swifts logo'/>
          </center>
           <form className="header__modal-signin">
              <Input
                className="header__modal-input" 
                placeholder='email'
                type='email'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                required
              />
              <Input
                className="header__modal-input" 
                placeholder='password'
                type='password'
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                required
              />
              <button className="header__modal-button" type="submit" onClick={signIn}>Sign In</button>
              <p className="header__modal-text">Don't have an account? <span className='header__modal-link' onClick={()=>{setOpenSignUp(true);setOpenSignIn(false)}}>Sign up</span></p>
           </form>
         </div>
      </Modal>
      <Modal
        open={openSignUp}
        // on close listens to clicks outside the modal. materialize built that for us
        onClose={()=>setOpenSignUp(false)}
      >
          
         <div style={modalStyle} className={classes.paper}>
         <center>
              <img className='header__modal-logo' src='../../logo/main-swifts-logo.png' atl='swifts logo'/>
          </center>
           <form className="header__modal-signup">
              <Input
                className="header__modal-input" 
                placeholder='email'
                type='email'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                required
              />
              <Input
                className="header__modal-input" 
                placeholder='password'
                value={password}
                type='password'
                onChange={(event)=>setPassword(event.target.value)}
                required
              />
              <button className="header__modal-button" type="submit" onClick={signUp}>Sign Up</button>
              <p className="header__modal-text">Already have an account? <span className='header__modal-link' onClick={()=>{setOpenSignIn(true);setOpenSignUp(false)}}>Sign in</span></p>
           </form>
         </div>
      </Modal>


            <div className='header__SectionOne'>
                <Link to='/'>
                    <img className='header__logo' src="../../logo/main-swifts-logo.png" alt="logo" />
                </Link>
                
                <div className='header__cartSection'>
                    <div>
                        <Link  className='header__cartIcon' to='/checkout'>
                            <ShoppingCartOutlinedIcon /> 
                        </Link>
                    </div>
                    <div>
                        <span>{shoppingCartCount}</span>
                    </div>
                </div>
            </div>
            <div className='header__SectionTwo'>
                <MenuIcon className='header__menuIcon' style={{marginLeft: 30}} onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)} />
                <div className='header__navs'>
                    <Link to='/' className='header__link'>HOME</Link>
                    <Link to='/shop' className='header__link'>SHOP</Link>
                    <Link to='/about' className='header__link'>ABOUT US</Link>
                    <Link to='/contact' className='header__link'>CONTACT</Link>
                    <Link to='/frequently-asked-questions' className='header__link'>FAQ</Link>
                </div>
                <div className='header__login'>
                    {user?<p>{user.email.toUpperCase()} <span className='header__signout' onClick={()=>auth.signOut()}>(SIGN OUT)</span></p>:
                    <span className='header__account' onClick={()=>setOpenSignIn(true)}>ACCOUNT</span>
                    }
                </div>
            </div>
            <div className={toggleDropdown? 'header__dropdown--show header__dropdown': 'header__dropdown--hide  header__dropdown'}>
                <div className='header__dropdownNavs'>
                    <Link to='/' className='header__link' onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)}>HOME</Link>
                    <Link to='/shop' className='header__link' onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)}>SHOP</Link>
                    <Link to='/about' className='header__link' onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)}>ABOUT US</Link>
                    <Link to='/contact' className='header__link' onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)}>CONTACT</Link>
                    <Link to='/frequently-asked-questions' className='header__link' onClick={toggleDropdown?()=>setToggleDropdown(false):()=>setToggleDropdown(true)}>FAQ</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    shoppingCartCount: selectShoppingCartCount(state)
})

export default connect(mapStateToProps)(Header)
