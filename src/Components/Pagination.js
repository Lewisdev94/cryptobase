import { React } from 'react'


const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className='flex justify-center my-4'>

            <ul className='flex items-center cursor-pointer pagination'>
                {page !== 1 && <a className='transition duration-500 ease-in-out hover:text-accent-col' onClick={() => { paginate(page - 1) }}  >{`<`}</a>}

                {pageNumbers.map(number => (


                    <li key={number} className={`${number === page ? 'selected text-accent-col ' : ''}p-2 page-item transition duration-500 ease-in-out hover:text-accent-col`} >
                        <a onClick={() => { paginate(number); }} className='page-link'>
                            {number}
                        </a>
                    </li>

                ))}
                {page !== pageNumbers.length && <a className='transition duration-500 ease-in-out hover:text-accent-col' onClick={() => { paginate(page + 1) }} >{`>`}</a>}

            </ul>
        </nav >
    )
}

export default Pagination
