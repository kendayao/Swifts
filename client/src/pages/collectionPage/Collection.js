import React from 'react'
import './Collection.css'
import{useParams} from 'react-router-dom'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'
import Card from '../../components/card/Card'

function Collection({collections}) {
    console.log(collections)
    const { CollectionId }=useParams();
    console.log( CollectionId )
    const collectionItems=collections[CollectionId]
    console.log(collectionItems)
    return (
        <div className='collectionPage'>
            
            
        </div>
    )
}

const mapStateToProps=(state)=>({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(Collection)
