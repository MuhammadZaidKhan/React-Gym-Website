import React from 'react';
import man from '../Assets/Rectangle 26.png';

const Section = () => {
    return (
        <div className="bg-color min-h-screen">
            <div className="flex">
                <div className=''>
                    <div className="custom-box relative">
                        <img src={man} alt="Background" />
                    </div>
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

                <div className="flex justify-center mt-4 product-container" >

                </div>
            </div>


        </div>

    );
};

export default Section;
