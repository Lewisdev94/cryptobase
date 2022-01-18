import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
    const [trending, setTrending] = useState([])
    const { currency, symbol } = CryptoState()
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
    };

    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;
        return (
            <Link className={'carouselItems  flex flex-col items-center'}
                to={`/coins/${coin.id}`}>

                <img className='h-24 pb-3' src={coin?.image} alt={coin.name} ></img>
                <span className='text-lg font-bold uppercase text-secondary-col'>
                    {coin?.symbol}
                </span>
                <span style={{ color: profit > 0 ? "rgb(14, 203, 129" : "red" }} > {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%</span>
                <span className='text-secondary-col'>{symbol}{numberWithCommas(coin?.current_price.toFixed(2))}</span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 3
        }
    }
    return (
        <div className='flex h-72 '>
            <AliceCarousel
                // keyboardNavigation
                touchTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>

    )
}

export default Carousel
