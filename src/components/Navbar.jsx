import React from 'react';

const Navbar = () => (
    <nav className='bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md'>
        <h1 className='text-2xl font-bold'>ATM Heavy Equipment</h1>
        <ul className='flex space-x-6'>
            <li><a href="#about" className='hover:text-yellow-400'>About</a></li>
            <li><a href="#product" className='hover:text-yellow-400'>Products</a></li>
            <li><a href="#services" className='hover:text-yellow-400'>Services</a></li>
            <li><a href="#contact" className='hover:text-yellow-400'>Contact</a></li>
        </ul>
    </nav>
);

export default Navbar
