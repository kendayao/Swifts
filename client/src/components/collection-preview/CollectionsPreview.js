import React from 'react'
import './CollectionsPreview.css'
import Card from '../card/Card'


function CollectionsPreview({items, routeName, title}) {

    return (
        <div className='collectionsPreview'>
            <div className='collectionPreview__heading'>
                <p>{title}</p>
                <p>Shop All {title}</p>
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
