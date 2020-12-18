import React from 'react'
import './CollectionPreview.css'
import {connect} from 'react-redux'

function CollectionPreview({collections}) {

    

    return (
        <div className='collectionPreview'>
        </div>
    )
}

const mapStateToProps=(state)=>({
    collections: state.shop.collections
})


export default connect(mapStateToProps)(CollectionPreview)
