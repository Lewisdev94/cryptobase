import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api'
import { CryptoState } from '../CryptoContext'
import CoinInfo from '../Components/CoinInfo'
import ReactHtmlParser from 'react-html-parser'
import { numberWithCommas } from '../Components/Banner/Carousel'

const CoinPage = () => {

    const { id } = useParams()
    const [coin, setCoin] = useState()
    const { currency, symbol } = CryptoState()

    const fetchCoins = async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
    }

    useEffect(() => {
        fetchCoins();
    }, [])

    if (!coin) return <p>Grabbing data...</p>

    return (
        <main className='flex flex-col items-center w-full h-full text-center text-secondary-col grow bg-primary-col'>
            <div className='w-11/12 py-4 coinData'>
                <img src={coin?.image.large} alt={coin?.name} className='w-32 h-auto mx-auto my-4' />
                <h2 className='mb-4 text-3xl text-secondary-col'>{coin?.name}</h2>
                {coin?.description.en &&
                    (<p className='mb-4 link-text'>{ReactHtmlParser(coin?.description.en.split(". ")[0])}.</p>)
                }
                <div>
                    <span className='flex flex-col'>
                        <h3><span className='font-bold'>Market Rank:</span> {coin?.market_cap_rank}</h3>
                        <h3><span className='font-bold'>Current Price: </span>{symbol}
                            {numberWithCommas(
                                coin?.market_data.current_price[currency.toLowerCase()]
                            )}</h3>
                        <h3><span className='font-bold'>Market Cap: </span>{symbol}
                            {numberWithCommas(
                                coin?.market_data.market_cap[currency.toLowerCase()]
                            )}</h3>
                    </span>
                </div>
            </div>

            <CoinInfo coin={coin} />

        </main>
    )
}

export default CoinPage
