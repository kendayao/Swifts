import React from 'react'
import './CollectionsPreview.css'
import Card from '../card/Card'
import {Link} from 'react-router-dom'


function CollectionsPreview({items, routeName, title}) {

    return (
        <div className='collectionsPreview'>
            <div className='collectionPreview__heading'>
                <p>{title}</p>
                <Link className='collectionPreview__link' to={`shop/${routeName}`}>Shop All {title}</Link>
            </div>
            <div className='collectionsPreview__row'>
                {items.filter((item,index)=>index<4).map((item)=>(
                    <Card 
                    key={item.productId}
                    image={item.image}
                    name={item.name}
                    price={item.price} 
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
  
})


export default CollectionsPreview
