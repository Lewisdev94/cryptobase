import React from 'react'
import { useNavigate } from "react-router-dom";



const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='mt-auto bg-primary-col footer'>
            <div className='flex justify-between w-11/12 mx-auto'>
                <a onClick={() => navigate("/")} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col footer-text">CryptoBase </a>
                <a href="https://lewisdev.me" onClick={() => window.open("https://lewisdev.me", '_blank', 'noopener,noreferrer')} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col hover:text-accent-col">lewisdev.me </a>
            </div>
        </footer>
    )
}

export default Footer
