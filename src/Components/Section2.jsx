import React from 'react';
import image from '../Assets/Rectangle 43.png';
import feet from '../Assets/Rectangle 52.png';
import fruits from '../Assets/Rectangle 54.png';
import black from '../Assets/Rectangle 57 (2).png';
import nblack from '../Assets/Rectangle 59.png';
import star from '../Assets/Star.png';
import client1 from '../Assets/Ellipse 7.png';
import client2 from '../Assets/Group 23.png';
import Vector from '../Assets/Vector.png';
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


const Section2 = () => {
    return (
        <div className="bg-color min-h-screen">
            {/* Image */}
            <div className="flex">
                <div className="custom-box relative">
                    <img src={image} alt="Background" />
                </div>
                {/* Calculator */}

                <div className="text-heading2">
                    <h1 className="mt-[-90] text-white font-averia-serif-libre text-3xl">Advanced Calculator</h1>

                    <h3 className='mt-3 text-white font-Poppins text-xl'>Gender</h3>
                    <select className='mt-2 px-5 h-10 w-40 rounded-md'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="flex mt-3">
                        <div className="mr-20">
                            <h3 className="text-white font-Poppins text-xl">Age</h3>
                            <input
                                type="number"
                                placeholder="20"
                                className="h-10 w-40 text-center rounded-md mt-2"
                            />
                        </div>
                        <div>
                            <h3 className="text-white font-Poppins text-xl">Weight</h3>
                            <input
                                type="number"
                                placeholder="42"
                                className="h-10 w-40 text-center rounded-md mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex mt-5">
                        <h3 className="text-white font-Poppins text-xl mr-5">Height</h3>
                    </div>
                    <div className="flex">
                        <input
                            type="number"
                            placeholder="42"
                            className="h-10 w-40 mt-2 text-center rounded-md"
                        />
                        <button className="bg-custom-yellow text-sm font-Poppins px-7 py-3 rounded-lg button-custom mx-[80px] ">
                            Buy Now
                        </button>
                    </div>

                    <div className='result-container rounded-md  bg-gray'>
                        <h2 className='text-white font-Poppins mt-3 ml-4'>The result is</h2>
                    </div>
                </div>
            </div>

            {/* Client’s Feedback */}
            <div>
                <div className="flex justify-center">
                    <h1 className="font-averia-serif-libre text-white text-4xl font-normal">Client’s Feedback</h1>
                    <div className='my-14'>
                        <div class="absolute left-1/2 transform -translate-x-1/2 h-1 w-32 bg-custom-yellow rounded"></div>
                    </div>
                </div>

                <div className='z-container-1 z-1'>
                    <div className='clients-z-container bg-grayy mb-20  rounded-full'>
                        <img className='client-img' src={client1} alt="" />
                        <div className='h2-p'>
                            <h2 className='text-xs font-Poppins text-white pt-3 pl-[150px]'>MR JOHN</h2>
                            <p className='text-xs font-Poppins text-white pt-2 pl-[150px]'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
                        </div>
                        <div className="h-6 mx-60 flex flex-row">
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                        </div>
                    </div>
                    <div className='clients-z-container bg-grayy mb-20  rounded-full'>
                        <img className='client-img2' src={client2} alt="" />
                        <div className='h2-p'>
                            <h2 className='text-xs font-Poppins text-white pt-3 pl-[40px]'>MR JOHN</h2>
                            <p className='text-xs font-Poppins text-white pt-2 pl-[40px]'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
                        </div>
                        <div className="h-6 mx-60 flex flex-row">
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                        </div>
                    </div>
                    <div className='clients-z-container bg-grayy  rounded-full'>
                        <img className='client-img' src={client1} alt="" />
                        <div className='h2-p'>
                            <h2 className='text-xs font-Poppins text-white pt-3 pl-[150px]'>MR JOHN</h2>
                            <p className='text-xs font-Poppins text-white pt-2 pl-[150px]'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
                        </div>
                        <div className="h-6 mx-60 flex flex-row">
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                            <img src={star} alt="Background" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-9 mb-10 place-content-evenly">
                <div class="w-3 h-3 bg-white border border-solid border-FEE715 rounded-full mx-1"></div>
                <div class="w-3 h-3 bg-white border border-solid border-FEE715 rounded-full mx-1"></div>
                <div class="w-3 h-3 bg-custom-yellow border border-solid border-FEE715 rounded-full mx-1 "></div>
                <div class="w-3 h-3 bg-white border border-solid border-FEE715 rounded-full mx-1"></div>
            </div>

            {/* Best Blogs */}
            <div>
                {/* Heading */}
                <div className="flex justify-center">
                    <h1 className="font-averia-serif-libre text-white text-4xl font-normal">Best Blogs</h1>
                    <div className='my-14'>
                        <div class="absolute left-1/2 transform -translate-x-1/2 h-1 w-32 bg-custom-yellow rounded"></div>
                    </div>
                </div>
                {/* Pictures */}

                <div className="feet-pics flex">
                    <img src={feet} alt="Background" />
                    <div className='image-like-container bg-grayy text-center'>
                        <h2 className='pt-10 font-bold text-2xl font-averia-serif-libre'>Gym Equipments</h2>
                        <p className='font-poppins text-sm text-white pt-3'>Weight loss is really<br />important for our health</p>
                        <div className="button-container-2 mb-5">
                            <button
                                className="text-black text-sm font-bold py-2 px-9 button-custom border border-yellow-500 rounded-full"
                            >
                                Buy Now
                            </button>
                        </div>

                    </div>
                    <img src={fruits} alt="Background" />
                    <div className='image-like-container bg-grayy text-center'>
                        <h2 className='pt-10 font-bold text-2xl font-averia-serif-libre'>Yoga</h2>
                        <p className='font-poppins text-sm text-white pt-3'>Weight loss is really<br />important for our health</p>
                        <div className="button-container-2">
                            <button
                                className=" bg-custom-yellow text-black text-sm font-bold py-2 px-9 button-custom border border-yellow-500 rounded-full"
                            >
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
                <div className="feet-pics flex ">
                    <div className='image-like-container bg-grayy text-center'>
                        <h2 className='pt-10 font-bold text-2xl font-averia-serif-libre'>Weight Loss</h2>
                        <p className='font-poppins text-sm text-white pt-3'>Weight loss is really<br />important for our health</p>
                        <div className="button-container-2 mb-5">
                            <button
                                className=" bg-custom-yellow text-black text-sm font-bold py-2 px-9 button-custom border border-yellow-500 rounded-full"
                            >
                                Buy Now
                            </button>
                        </div>

                    </div>
                    <img src={black} alt="Background" />
                    <div className='image-like-container bg-grayy text-center'>
                        <h2 className='pt-10 font-bold text-2xl font-averia-serif-libre'>Healthy LifeStyle</h2>
                        <p className='font-poppins text-sm text-white pt-3'>Weight loss is really<br />important for our health</p>
                        <div className="button-container-2 mb-5">
                            <button
                                className="bg-custom-yellow text-black text-sm font-bold py-2 px-9 button-custom border border-yellow-500 rounded-full"
                            >
                                Buy Now
                            </button>
                        </div>

                    </div>
                    <img src={nblack} alt="Background" />
                </div>
            </div>


            {/* Footer */}
            <div className='bg-color mt-20'>
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
                <h2 className='text-white font-Poppins text-lg text-center mt-5'>@Coded By Muhammad-Zaid-Khan</h2>
            </div>

        </div>
    )
}
export default Section2;
