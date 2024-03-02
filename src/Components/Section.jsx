import React from 'react';
import man from '../Assets/Rectangle 26.png';
import image1 from '../Assets/image 1.png';
import image2 from '../Assets/image 4.png';
import image3 from '../Assets/image 5.png';

const Section = () => {
    return (
        <div className="bg-color min-h-screen">
            <div className="flex">
                <div className="custom-box relative mt-36">
                    <img src={man} alt="Background" />
                </div>

                <div class="text-heading">
                    <h1 class="text-white font-black font-averia-serif-libre text-2xl">
                        Get Ready to Reach<br />
                        Your Fitness Goals
                    </h1>
                </div>

                <div class="p-div">
                    <p class="font-Poppins p-class text-wrap text-xs text-white">
                        Combining aerobic exercise with other kinds of<br /> exercises like strength training with weights and<br /> stretching keeps muscles, ligaments, joints, and<br /> tendons healthy, flexible, and strong, so when one<br /> becomes older,
                        <br /><br />
                        they are stronger and have less risk of being out of<br />  balance and falling, thus causing fractures or other<br />  injuries.
                    </p>

                    {/* buttonn */}
                    <div className="button-container">
                        <button className="bg-custom-yellow hover:bg-custom-yellow text-black text-sm font-semibold py-1 px-4 rounded-3xl button-custom">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center">
                <div className="flex justify-center">
                    <h1 className="font-averia-serif-libre text-white text-4xl font-normal">Latest Products</h1>
                </div>

                <div className="flex-row mt-4 product-container" >

                    <div className='flex flex-row image-container '>
                        <img
                            src={image1}
                            alt="Background"
                        />
                        <img
                            src={image2}
                            alt="Background"
                        />
                        <img
                            src={image3}
                            alt="Background"
                        />
                    </div>

                </div>
            </div>


        </div>

    );
};

export default Section;
