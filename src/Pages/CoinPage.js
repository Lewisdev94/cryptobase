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
        try {
            const { data } = await axios.get(SingleCoin(id));
            setCoin(data);
        }
        catch (error) {
            window.location.href = '/'
        }
    }

    useEffect(() => {
        fetchCoins();
    }, [])


    if (!coin) return <p className='w-11/12 mx-auto md:max-w-6xl text-secondary-col'>Grabbing data...</p>

    return (

        <main className='flex flex-col items-center w-11/12 h-full mx-auto text-center md:items-start md:flex-row text-secondary-col grow bg-primary-col md:mt-8 md:max-w-screen-2xl'>
            <div className='w-full py-4 md:w-2/6 coinData md:pr-8 '>
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
