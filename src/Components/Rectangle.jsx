import React from 'react';
import Barbell from '../Assets/Barbell.png';
import Barbell1 from '../Assets/Weighing.png';
import Barbell2 from '../Assets/Edit Pie Chart Report.png';
const Rectangle = () => {
    return (
        <div className='z-container-1 z-1'>
            <div className='z-container bg-gray-500'>
                <div className='flex space-x-44'>
                    <div className='Barbell flex'>
                        <img src={Barbell} alt="" />
                        <h1 className='font-averia-serif-libre font-bold text-white text-2xl'>Quality Equipments</h1>
                        <div className='my-14'>
                            <div class="absolute top-1/2 transform -translate-y-1/2 w-1 h-28 ml-8 bg-custom-yellow rounded"></div>
                        </div>

                    </div>
                    <div className='Barbell flex'>
                        <img src={Barbell1} alt="" />
                        <h1 className='font-averia-serif-libre font-bold text-white text-2xl'>Weight Loss</h1>
                        <div className='my-14'>
                            <div class="absolute top-1/2 transform -translate-y-1/2 w-1 h-28 ml-12 bg-custom-yellow rounded"></div>
                        </div>

                    </div>
                    <div className='Barbell flex'>
                        <img src={Barbell2} alt="" />
                        <h1 className='font-averia-serif-libre font-bold text-white text-2xl'>Diet Chart</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rectangle;
