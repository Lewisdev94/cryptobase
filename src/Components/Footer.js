import React from 'react'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='mt-auto bg-primary-col footer'>
            <div className='flex justify-between w-11/12 mx-auto'>
                <p onClick={() => navigate("/")} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col hover:text-accent-col">CryptoBase </p>
                <p onClick={() => window.location.href = "https://lewisdev.me"} className="py-3 text-xl font-light transition duration-200 ease-in-out cursor-pointer text-secondary-col hover:text-accent-col">lewisdev.me </p>
            </div>
        </footer>
    )
}

export default Footer
