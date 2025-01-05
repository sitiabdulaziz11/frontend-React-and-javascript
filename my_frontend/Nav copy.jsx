import React, { useState } from 'react'

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // !false = true
    };

    return (
        <nav className='bg-green-600 p-4 '>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">ReactTailwind</div>

                {/* Menu Button */}
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            {/* hamburger */}
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>

                <ul className='hidden md:flex space-x-4'>
                    <li className='py-2'><a href="#" className='text-white'></a>Home</li>
                    <li className='py-2'><a href="#" className='text-white'></a>Services</li>
                    <li className='py-2'><a href="#" className='text-white'></a>About</li>
                </ul>
            </div>

            {/* Mobile menu */}
            {isMenuOpen ? (
                <ul className='flex-col md:hidden'>
                    <li><a href="#" className='text-white'></a>Home</li>
                    <li><a href="#" className='text-white'></a>Services</li>
                    <li><a href="#" className='text-white'></a>About</li>
                </ul>) : null}
        </nav>
    )
}

export default Nav
