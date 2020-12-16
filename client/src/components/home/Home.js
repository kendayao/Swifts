import React from 'react'
import './Home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <div className='home__body'>
                <div className='home__category'>
                    <div className='home__categoryOne'>
                        <div className='home__categoryContents'>
                            <p>CASUAL</p>
                        </div>
                        <img src="../../images/casual.png" alt="casual shoe"/>
                    </div>
                    <div className='home__categoryTwo'>
                        <div className='home__categoryContents'>
                            <p>FITNESS</p>
                        </div>
                        <img src="../../images/fitness.png" alt="fitness shoe"/>
                    </div>
                    <div className='home__categoryThree'>
                        <div className='home__categoryContents'>
                            <p>RUNNING</p>
                        </div>
                        <img src="../../images/running.png" alt="running shoe"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
