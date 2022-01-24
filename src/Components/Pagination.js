import { React } from 'react'


const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className='flex justify-center my-4'>

            <ul className='flex items-center justify-between pagination'>
                <a className={`flex ${page == 1 && 'opacity-0 cursor-default'}  items-center justify-center w-6 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer page-arrows`} onClick={() => { if (page !== 1) paginate(page - 1) }}    >{`<`}</a>

                {pageNumbers.map(number => (


                    <li key={number} className={`${number === page ? 'selected bg-light-accent-col ' : ''} page-item flex items-center justify-center cursor-pointer w-6 h-6 transition duration-500 rounded-full ease-in-out hover:bg-accent-col `} >
                        <a onClick={() => { paginate(number); }} className='page-link'>
                            {number}
                        </a>
                    </li>

                ))}
                <a className={`${page == pageNumbers.length && 'invisible'} flex items-center justify-center w-6 h-6 transition duration-500 ease-in-out rounded-full cursor-pointer page-arrows`} onClick={() => { if (page !== pageNumbers.length) paginate(page + 1) }} >{`>`}</a>

            </ul>
        </nav >
    )
}

export default Pagination
