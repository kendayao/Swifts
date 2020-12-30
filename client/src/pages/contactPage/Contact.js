import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__logo'>
                <img src='../../logo/main-swifts-logo.png' alt='swifts logo'/>
            </div>

            <div className='contact__body'>
                <div className='contact__header'>
                    <p className='contact__title'>Contact Us</p>
                </div>

                <div className='contact__formSection'>
                    <form className='contact__form'>
                        <label for='name'>Name</label>
                        <input className='contact__input' type='text' id='name' name='name' placeholder='name'></input>
                        <label for='email'>Email</label>
                        <input className='contact__input' type='email' id='email' name='email' placeholder='email'></input>
                        <label for='email'>Message</label>
                        <textarea className='contact__message' type='text' id='message' name='message' rows='10' placeholder='type message here...'></textarea>
                        <button className='contact__button' type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
