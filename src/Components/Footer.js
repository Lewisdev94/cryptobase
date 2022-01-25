import React from 'react'
import { useNavigate } from "react-router-dom";



const Footer = () => {
    const navigate = useNavigate();
    function enterEvent() {
        navigate("/")
    }
    return (
        <footer className='mt-auto bg-primary-col footer'>
            <div className='flex justify-between w-11/12 mx-auto md:max-w-6xl'>
                <a tabIndex='0' onClick={() => navigate("/")} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        enterEvent()
                    }
                }} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col footer-text">CryptoBase </a>
                <a tabIndex='0' onKeyPress={event => {
                    if (event.key === 'Enter') {
                        window.open("https://lewisdev.me", '_blank', 'noopener,noreferrer')
                    }
                }} onClick={() => window.open("https://lewisdev.me", '_blank', 'noopener,noreferrer')} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col hover:text-accent-col focus:text-accent-col">lewisdev.me </a>
            </div>
        </footer>
    )
}

export default Footer
