import React from 'react'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
    return (
        <nav className="container mx-auto flex justify-between py-3 font-krona">
            {/* Logo */}
            {/* TODO: Cretae a saparate component */}
            <a href='/' className='text-2xl'>ClearIT</a>

            <div className="flex items-end">
                <a href='/home' className='text-sm mr-8'>Home</a>
                <a href='/search' className='text-sm mr-8'>Search</a>
                <a href='/about' className='text-sm mr-8'>About</a>

                {/* icons */}
                <div className="flex text-dark">
                    <a href='/liked' className='h-6 w-6 mr-4'><AiOutlineHeart size="24" /></a>
                    <a href='/cart' className='h-6 w-6'><AiOutlineShopping size="24" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar