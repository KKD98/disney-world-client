import React from 'react';
import img1 from '../../assets/clientone.jpg'
import img2 from '../../assets/clientwo.jpg'
import img3 from '../../assets/clientthree.jpg'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <div className='my-16'>
            <p className='text-sky-400 text-center text-4xl'>--------------------</p>
            <h1 className='text-3xl text-center font-semibold text-black font-mono'>Client Reviews </h1>
            <p className='text-sky-400 text-center text-4xl'>--------------------</p>

            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-4/5 mx-auto my-5'>
                <div className="flex flex-col gap-2 w-[70%] mx-auto lg:w-full justify-center items-center shadow-xl shadow-black">

                    <img src={img1} alt="toypic" className='w-[200px] h-[200px] p-3 rounded-full' />
                    <div className=" bg-sky-400 w-full p-3">

                    <p className='mb-2 text-xl text-center font-semibold w-full text-gray-700'>Limited variety, unhelpful staff, and high prices; not the best toy shop option.</p>
                        <p className='mb-1 text-xl font-semibold text-center'>Lian</p>

                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[70%] mx-auto lg:w-full justify-center items-center shadow-xl shadow-black">

                    <img src={img2} alt="toypic" className='w-[200px] h-[200px] p-3 rounded-full' />
                    <div className=" bg-sky-400 w-full p-3">

                    <p className='mb-2 text-xl text-center font-semibold w-full  text-gray-700'>Limited variety, unhelpful staff, and high prices make this toy shop a disappointing choice.</p>
                        <p className='mb-1 text-xl font-semibold text-center'>Alen</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[70%] mx-auto lg:w-full justify-center items-center  shadow-xl shadow-black">

                    <img src={img3} alt="toypic" className='w-[200px] h-[200px] p-3 rounded-full' />
                    <div className=" bg-sky-400 w-full p-3">

                    <p className='mb-2 text-xl text-center font-semibold w-full  text-gray-700'>Amazing selection and friendly staff, highly recommended for a fun toy shopping experience!</p>
                        <p className='mb-1 text-xl font-semibold text-center'>Rose</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;