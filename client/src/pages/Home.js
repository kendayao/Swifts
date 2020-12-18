import React from 'react'
import './Home.css'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'
import SHOP_DATA from '../shop.data'

function Home() {

    const topSellers=SHOP_DATA['topSellers'].items
    return (
        <div className='home'>
            <Header />
            <Banner />

            <div className='home__body'>
                <div className='home__row'>
                    <div className='home__category'>
                        <p>CASUAL</p>
                        <img src='../../images/casual.png' alt='casual shoe'/>
                    </div>
                    <div className='home__category'>
                        <p>FITNESS</p>
                        <img src='../../images/fitness.png' alt='fitness shoe'/>
                    </div>
                    <div className='home__category'>
                        <p>RUNNING</p>
                        <img src='../../images/running.png' alt='running shoe'/>
                    </div>
                </div>

                
                <div className='home__preview'>
                    <div className='home__preview-title'>
                        <p>Top Sellers</p>
                        <p>Shop All</p>
                    </div>
                    <div className='home__row'>
                        {topSellers.map(item=>(
                            <Card 
                                key={item.productId}
                                name={item.name}
                                color={item.color}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
