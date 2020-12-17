import React from 'react'
import './Home.css'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
function Home() {
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
            </div>












        </div>
    )
}

export default Home
