import React from 'react';
import Vector from '../Assets/Vector.png';
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <div className='bg-color h-full pt-20'>
                {/* Footer */}
                <div className='product-container-2 bg-grayy'>
                    <div className='flex justify-between p-10'>
                        {/* First Column */}
                        <div className='mr-10'>
                            <img src={Vector} alt="Background" className="w-43 h-26 ml-9" />
                            <h2 className='text-xl font-bold font-PottaOne'>
                                <span className='text-custom-yellow'>Gym</span>
                                <span className='text-white'>Mini</span>Store
                            </h2>
                            <p className='text-xs font-Poppins text-white pt-4'>
                                Exercise and fit yourself<br />This is Best Store For you
                            </p>

                            <div className='flex space-x-2 mt-3 text-white'>
                                <FaTwitter />
                                <FaYoutube />
                                <FaLinkedin />
                                <FaFacebook />
                                <FaInstagram />
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className=''>
                            <h4 className='font-Popins text-white font-bold mt-4'>Information</h4>
                            <ul className='mt-4 text-white text-xs font-Poppins space-y-2'>
                                <li className=' hover:text-yellow-500'>Home</li>
                                <li className=' hover:text-yellow-500'>About Us</li>
                                <li className=' hover:text-yellow-500'>About Us</li>
                                {/* Add more navigation links here */}
                            </ul>
                        </div>

                        {/* Third Column */}
                        <div className=''>
                            <h4 className='font-Popins text-white font-bold mt-4'>Contact</h4>
                            <ul className='mt-4 text-white text-xs font-Poppins space-y-2'>
                                <li className=' hover:text-yellow-500'>Address</li>
                                <li className=' hover:text-yellow-500'>Phone Number</li>
                                <li className=' hover:text-yellow-500'>Phone Number</li>
                                {/* Add more contact information here */}
                            </ul>
                        </div>

                        {/* Fourth Column */}
                        <div className='font-Popins text-white font-bold mt-4'>
                            <h4>Newsletter</h4>
                            <p className='text-xs font-Poppins text-white pt-4 pb-3'>
                                Subscribe to our newsletter and<br /> amazing new updates
                            </p>
                            <div className='flex items-center'>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    className='border border-gray-300 rounded p-2 mr-2'
                                />
                                <button className='bg-custom-yellow text-black p-2 rounded'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-white font-Poppins text-lg text-center mt-3 pb-2'>@Coded By Muhammad-Zaid-Khan</h2>
            </div>

        </>
    );
};

export default Footer;
