import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
    return (
        <span className={`${selected ? 'bg-secondary-col' : 'bg-accent-col'}   text-center cursor-pointer border-hidden rounded my-2 mx-3 w-12   text-primary-col  transition duration-500 ease-in-out  }`} onClick={onClick} >
            {children}
        </span >
    )
}

export default SelectButton
