import React, {useState} from 'react'
import './Faq.css'
import faqData from '../../faq.data'
import FaqItem from '../../components/faq-item/FaqItem'

function Faq() {


    return (
        <div className='faq'>
            <div className='faq__body'>
                <div className='faq__header'>
                    <p className='faq__title'>Frequently Asked Questions</p>
                </div>
               {faqData.map(item=>(
                   <FaqItem key={item.faqId} id={item.faqId} question={item.question} answer={item.answer}/>
               ))}
            </div>

        </div>
    )
}

export default Faq
