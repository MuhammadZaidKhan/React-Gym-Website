import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Vector from '../Assets/Vector.png';
import Ellipse from '../Assets/Ellipse 25.png';
import Vector2 from '../Assets/Vector2.png';

const Navbar = () => {
    return (
        <header className='max-w-screen-xl mx-auto fixed space-x-9 !important flex justify-between py-6 px-2 items-center absolute w-full z-10 mt-2'>
            {/* Logo */}
            <div className='ml-10'>
                <div className='ml-11'>
                    <img
                        src={Vector}
                        alt="Background"
                        className="w-43 h-26"
                    />
                </div>
                <h2 className='text-xl font-bold font-PottaOne'>
                    <span className='text-custom-yellow'>Gym<span className='text-white'>Mini</span>Store</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <div style={{ marginLeft: '100px' }}>
                <ul className='flex text-white space-x-8 font-Poppins' >
                    <li>
                        <Link to="/" className=' hover:text-yellow-500'>Home</Link>
                    </li>
                    <li>
                        <Link to="/" className=' hover:text-yellow-500'>Courses</Link>
                    </li>
                    <li>
                        <Link to="/" className=' hover:text-yellow-500'>Blog</Link>
                    </li>
                </ul>
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center">
                <div className="relative">
                    <input
                        type="text"
                        className="w-60 h-10 rounded-full pl-4 pr-10 opacity-50"
                        placeholder="Search"
                        style={{ marginRight: '10px' }} // Adjust the space from the right
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} className="absolute right-3 top-3 text-yellow-400" />
                </div>
            </div>

            <div className="relative">
                <img
                    src={Ellipse}
                    alt="Background"
                    className="pr-40 w-50 h-90"
                // style={{ backgroundColor: 'rgba(119, 116, 114, 0.47)', zIndex: 1 }} // Set a higher z-index for the background image
                />
                <img
                    src={Vector2}
                    alt="Another Image"
                    className="absolute top-3 left-3"
                    style={{ zIndex: 2 }} // Set a higher z-index for the image on top
                />
            </div>


        </header>
    )
}

export default Navbar;
