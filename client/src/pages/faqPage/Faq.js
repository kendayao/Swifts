import React, {useState} from 'react'
import './Faq.css'
import faqData from '../../faq.data'
import FaqItem from '../../components/faq-item/FaqItem'

function Faq() {

    const [showAnswer, setShowAnswer]=useState(false);


    return (
        <div className='faq'>
               <div className='faq__logo'>
                <img src='../../logo/main-swifts-logo.png' alt='swifts logo'/>
            </div>

            <div className='faq__body'>
               {faqData.map(item=>(
                   <FaqItem key={item.faqId} id={item.faqId} question={item.question} answer={item.answer}/>
               ))}
            </div>

        </div>
    )
}

export default Faq
