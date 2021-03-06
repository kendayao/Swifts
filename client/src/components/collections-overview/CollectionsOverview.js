import React from 'react'
import './CollectionsOverview.css'
import CollectionsPreview from '../collection-preview/CollectionsPreview'
import {connect} from 'react-redux'
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'

function CollectionsOverview({collections}) {
    
    return (
        <div className='collectionsOverview'>
            <img src='../../images/swifts-ad-two.png' alt='swift running ad'/>
            {collections.filter((item,index)=>index<4).map(collection=>(
                <CollectionsPreview 
                key={collection.categoryId} 
                items={collection.items} 
                routeName={collection.routeName}
                title={collection.title}
                />
            ))}
            
        </div>
    )
}

const mapStateToProps=state=>({
    collections: selectCollectionForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)
