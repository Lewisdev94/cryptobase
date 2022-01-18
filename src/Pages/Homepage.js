import { React, useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import CoinsTable from '../Components/CoinsTable'

const Homepage = () => {

    useEffect(() => {
        document.title = 'CryptoBase'
    })

    return (
        <main className='flex flex-col flex-auto' >
            <Banner />
            <CoinsTable />
        </main>
    )
}

export default Homepage
