import React from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {Link} from 'react-router-dom'

function Home({collections}) {

    const topSellers=collections['topSellers'].items
    return (
        <div className='home'>
            <Banner />

            <div className='home__body'>
                <div className='home__row'>
                    <div className='home__category'>
                        <p>CASUAL</p>
                        <Link to='/shop/casual'>
                            <img className='home__category-image' src='../../images/casual.png' alt='casual shoe'/>
                        </Link>
                    </div>
                    <div className='home__category'>
                        <p>FITNESS</p>
                        <Link to='/shop/fitness'>
                            <img className='home__category-image'  src='../../images/fitness.png' alt='fitness shoe'/>
                        </Link>
                    </div>
                    <div className='home__category'>
                        <p>RUNNING</p>
                        <Link to='/shop/running'>
                        <img className='home__category-image' src='../../images/running.png' alt='running shoe'/>
                        </Link>
                    </div>
                </div>

                
                <div className='home__preview'>
                    <div className='home__preview-title'>
                        <p>Top Sellers</p>
                        <Link className='home__preview-link' to='/shop'>Shop All</Link>
                    </div>
                    <div className='home__row'>
                        {topSellers.map(item=>(
                            <Card 
                                key={item.productId}
                                name={item.name}
                                color={item.color}
                                image={item.image}
                                price={item.price}
                                route={item.route}
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps=(state)=>({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(Home)
