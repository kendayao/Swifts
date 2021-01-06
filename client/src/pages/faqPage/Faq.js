import React, {useEffect, useState} from 'react'
import './Faq.css'
import FaqItem from '../../components/faq-item/FaqItem'
import API from '../../utils/API'

function Faq() {

    const [faqData, setFaqData]=useState([]);


    useEffect(()=>{
        API.getFaqs().then(res=>{
          console.log(res)
          setFaqData(res.data)
        }).catch(err=>console.log(err))
    
      },[])
   
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
