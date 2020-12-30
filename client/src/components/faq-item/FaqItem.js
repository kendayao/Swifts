import React, {useState} from 'react'
import './FaqItem.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function FaqItem({id, question, answer}) {

    const [openAnswer, setOpenAnswer]=useState(false);

    function showAnswer(id){
        if(id===id){
            setOpenAnswer(true)
        }
    }


    function hideAnswer(id){
        if(id===id){
            setOpenAnswer(false)
        }
    }

    

    return (
        <div className='faqItem'>
             <div className='faq__questionContainer' onClick={openAnswer?()=>hideAnswer(id):()=>showAnswer(id)}>
                <p className='faq__question'>{question}</p>
                {openAnswer?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
            </div>
            <div className={openAnswer?'faq__answer--show':'faq__answer--hide'}>
                <p className='faq__answer'>{answer}</p>
            </div>
        </div>
    )
}

export default FaqItem
