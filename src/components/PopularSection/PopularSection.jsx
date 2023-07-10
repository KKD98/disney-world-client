import React from 'react';
import popular1 from '../../assets/popular1.jpg'
import popular2 from '../../assets/popular2.jpg'
import popular3 from '../../assets/popular3.jpg'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const PopularSection = () => {
    return (
        <div className='my-4'>
            <p className='text-sky-400 text-center text-4xl'>--------------------</p>
            <h1 className='text-3xl text-center font-semibold text-black font-mono'>Popular Items </h1>
            <p className='text-sky-400 text-center text-4xl'>--------------------</p>

            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-4/5 mx-auto my-5'>
                <div className="flex flex-col gap-2 w-[80%] mx-auto lg:w-full justify-center items-center border-2 border-gray-100 shadow-xl shadow-black">

                    <div className='flex flex-col justify-center items-center w-full py-3 px-2'>
                        <h2 className="text-xl font-mono font-semibold mb-2">Disney Doll</h2>
                        <div>
                            <Rating
                                placeholderRating={4.9}
                                emptySymbol={<FaRegStar className='text-xl text-yellow-600'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                                fullSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                            />
                        </div>
                    </div>
                    <img src={popular1} alt="toypic" className='w-[250px] h-[250px] p-3' />
                    <div className="flex flex-col justify-start items-start bg-sky-400 w-full p-3">

                        <p className='mb-1 text-xl font-semibold'>$10</p>

                        <div >
                            <button className="btn p-0 hover:p-0 bg-sky-400 text-white border-none hover:bg-sky-400  hover:text-black">View More</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%] mx-auto lg:w-full justify-center items-center shadow-xl shadow-black">

                    <div className='flex flex-col justify-center items-center border-2 border-gray-100 w-full py-3 px-2'>
                        <h2 className="text-xl font-mono font-semibold mb-2">Spider Man</h2>
                        <div>
                            <Rating
                                placeholderRating={4.8}
                                emptySymbol={<FaRegStar className='text-xl text-yellow-600'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                                fullSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                            />
                        </div>
                    </div>
                    <img src={popular2} alt="toypic" className='w-[250px] h-[250px] p-3' />
                    <div className="flex flex-col justify-start items-start bg-sky-400 w-full p-3">

                        <p className='mb-1 text-xl font-semibold'>$9</p>

                        <div >
                            <button className="btn p-0 hover:p-0 bg-sky-400 text-white border-none hover:bg-sky-400  hover:text-black">View More</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%] mx-auto lg:w-full justify-center items-center shadow-xl shadow-black">

                    <div className='flex flex-col justify-center items-center border-2 border-gray-100 w-full py-3 px-2'>
                        <h2 className="text-xl font-mono font-semibold mb-2">Yoda</h2>
                        <div>
                            <Rating
                                placeholderRating={4.9}
                                emptySymbol={<FaRegStar className='text-xl text-yellow-600'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                                fullSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                            />
                        </div>
                    </div>
                    <img src={popular3} alt="toypic" className='w-[250px] h-[250px] p-3' />
                    <div className="flex flex-col justify-start items-start bg-sky-400 w-full p-3">

                        <p className='mb-1 text-xl font-semibold'>$11</p>

                        <div >
                            <button className="btn p-0 hover:p-0 bg-sky-400 text-white border-none hover:bg-sky-400  hover:text-black">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularSection;