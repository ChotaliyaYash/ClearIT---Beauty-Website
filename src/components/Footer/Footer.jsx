import React from 'react'

const Footer = () => {

    const links = [
        'about',
        'skincare',
        'makeup',
        'supplements',
        'contact'
    ]

    return (
        <footer className='bg-dark flex text-light justify-between p-4'>
            {/* TODO: use same symbole as navbar */}
            <a href='/' className='text-2xl font-krona text-yellow'>ClearIT</a>

            <div className="flex items-center">
                {links.map((link) => (
                    <a href='/' className='ml-4'>{link}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer