import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { CoinList } from '../config/api'
import { CryptoState } from '../CryptoContext'
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from './Banner/Carousel';
import Pagination from './Pagination'

const CoinsTable = () => {
    const navigate = useNavigate();
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState([])
    const [page, setPage] = useState(1)
    const [postsPerPage] = useState(10)
    const { currency, symbol } = CryptoState()

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency))
        setCoins(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCoins()
    }, [currency])

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search))
        )
    }
    const indexOfLastPost = page * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = handleSearch().slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setPage(pageNumber)



    return (
        <div className='bg-secondary-col flex flex-col flex-auto  ;'>
            <div className='flex flex-col w-11/12 pt-8 mx-auto coinTableSection text-primary-col '>
                <h3 className='text-2xl text-center'>Cryptocurrency by Market Cap</h3>
                {loading ? <p>Grabbing Data...</p> :
                    <div className='mt-6 coinTable'>
                        <div className='box'>
                            <input className="p-2 mb-4 .placeholder-orange-200 rounded-xl input text-zinc-900 bg-zinc-300 " type='text' placeholder='Search coins...' name='searchBar'
                                onChange={(e) => { setSearch(e.target.value.toLowerCase()); setPage(1) }}>
                            </input>
                        </div>

                        <div>

                            <table className='w-full'>
                                <thead className=''>
                                    <tr className='border-solid border-primary-col'>
                                        {["Coin", "Price", "24h Change", "Market Cap"].map((heading) => (
                                            <th className='px-1 text-right border-collapse border-solid first:text-left border-primary-col' key={heading}>{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className=''>

                                    {currentPosts.map((row) => {
                                        const profit = row.price_change_percentage_24h > 0;
                                        return (
                                            <tr className='transition duration-200 ease-in-out cursor-pointer hover:bg-light-accent-col'
                                                onClick={() =>
                                                    navigate(`/coins/${row.id}`)

                                                }

                                                key={row.name} >
                                                <td name='name' className='rounded-tl-xl rounded-bl-xl' >
                                                    <div className='flex flex-row items-center py-2 pl-2' >
                                                        <img className='w-4 h-auto mr-2 ' src={row?.image} alt={row.name}></img>
                                                        <div className='flex flex-col'>
                                                            <span className='uppercase'>{row.symbol}</span>
                                                            {/* <span className='uppercase'>{row.name}</span> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-right ' name='price'>
                                                    {symbol}
                                                    {numberWithCommas(row.current_price.toFixed(2))}
                                                </td>
                                                <td className='text-right ' style={{ color: profit > 0 ? "green" : "red" }} name='percent'>
                                                    {profit && "+"}
                                                    {row.price_change_percentage_24h.toFixed(2)}%
                                                </td>

                                                <td className='pr-2 text-right rounded-tr-xl rounded-br-xl'>
                                                    {symbol}{numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                                                </td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                        </div>
                        {currentPosts == 0 ? <p>No matching coins.</p> :
                            <Pagination postsPerPage={postsPerPage} totalPosts={handleSearch().length} paginate={paginate} page={page} />}

                    </div>
                }
            </div >
        </div>

    )
}

export default CoinsTable

