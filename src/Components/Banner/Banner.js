import React from 'react'
import Carousel from './Carousel'

const Banner = () => {
    return (
        <div className='flex flex-col bg-primary-col banner'>
            <div className='flex flex-col items-center justify-center pt-24 pb-8 tagline '>
                <h2 className='pb-4 text-5xl text-secondary-col title'>CryptoBase</h2>
                <p className='text-xl text-secondary-col subtitle'>Crypto prices and historical charts</p>
            </div>
            <Carousel />
        </div>
    )
}

export default Banner
