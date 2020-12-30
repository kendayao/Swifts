import React from 'react'
import './FaqItem.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function FaqItem({question, answer}) {
    return (
        <div className='faqItem'>
             <div className='faq__questionContainer'>
                <p className='faq__question'>{question}</p>
                <KeyboardArrowUpIcon/>
            </div>
            <div>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FaqItem
