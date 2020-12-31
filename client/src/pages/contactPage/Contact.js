import React, {useState} from 'react'
import './Contact.css'
import API from '../../utils/API'

function Contact() {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [message, setMessage]=useState('')


    function handleFormSubmit(event){
        event.preventDefault();

        API.saveMessage({
            name: name,
            email: email,
            message: message
        }).then(res=>console.log(res)).catch(err=>console.log(err))

        setName('')
        setEmail('')
        setMessage('')


    }
    
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
                        <label htmlFor='name'>Name</label>
                        <input className='contact__input' type='text' id='name' name='name' value={name} placeholder='name' onChange={(event)=>setName(event.target.value)} required />
                        <label htmlFor='email'>Email</label>
                        <input className='contact__input' type='email' id='email' name='email' value={email} placeholder='email' onChange={(event)=>setEmail(event.target.value)} required />
                        <label htmlFor='message'>Message</label>
                        <textarea className='contact__message' type='text' id='message' name='message' rows='10' placeholder='type message here...' value={message} onChange={(event)=>setMessage(event.target.value)} required />
                        {name && email && message? <input className='contact__button' type='submit' value='Send Message' onClick={handleFormSubmit}/>: <input disabled className='contact__button' type='submit' value='Send Message'/>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
