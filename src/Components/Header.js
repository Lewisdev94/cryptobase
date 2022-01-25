import React from 'react'
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';




const Header = () => {
    const navigate = useNavigate();
    const { currency, setCurrency } = CryptoState()
    function enterEvent() {
        navigate("/")
    }
    return (
        <header className='flex justify-center bg-primary-col header '>
            <div className='flex items-center justify-between w-11/12 py-4 innerHeader md:max-w-6xl'>
                <h1 tabIndex='0' onKeyPress={event => {
                    if (event.key === 'Enter') {
                        enterEvent()
                    }
                }}
                    onClick={() => navigate("/")} className="text-3xl font-light transition duration-200 ease-in-out cursor-pointer site-header text-zinc-50 ">CryptoBase </h1>
                <div className='currencySelector' >
                    <label className='currencySelect' htmlFor="currencySelect"></label>
                    <select className='px-2 text-xl cursor-pointer bg-secondary-col select text-zinc-900' id='currencySelect'
                        value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value={"USD"}>USD</option>
                        <option value={"GBP"}>GBP</option>
                        <option value={"EUR"}>EUR</option>
                    </select>
                </div>
            </div>
        </header>
    )
}





export default Header
