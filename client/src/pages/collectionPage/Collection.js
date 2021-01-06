import React from 'react'
import './Collection.css'
import Card from '../../components/card/Card'
import{useParams} from 'react-router-dom'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'

function Collection({collections}) {
    const { CollectionId }=useParams();
    const collectionItems=collections[CollectionId]

    return (
        <div className='collectionPage'>
            <p className='collectionPage__title'>{collectionItems.title}</p>
            <div className='collectionPage__cards'>
                {collectionItems.items.map(item=>(
                    <Card 
                        key={item.productId}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        route={item.route}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(Collection)
