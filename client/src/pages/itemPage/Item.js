import React from 'react'
import './Item.css'
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {useParams} from 'react-router-dom'

function Item({collections}) {
    const { ItemId }=useParams();
    const { CollectionId }=useParams();
    console.log(CollectionId)
    console.log(ItemId)
    const collectionItems=collections[CollectionId]
    console.log(collectionItems)

    const test=collectionItems.items.find(item=>ItemId===item.refName)
    
    return (
        <div className='item'>
            <h1>{test.name}</h1>
        </div>
    )
}

const mapStateToProps=state=>({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(Item)
