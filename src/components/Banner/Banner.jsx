import React from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full  bg-white">
            <div id="slide1" className="carousel-item relative w-full">

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner1} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-4xl font-bold text-black font-mono">Doll</h1>
                            <p className="py-6 text-xl text-black font-semibold">Explore limitless opportunities with these dolls that open up a world of endless possibilities.</p>
                            <button className="btn btn-md bg-sky-400 text-white hover:bg-gray-100 hover:text-sky-400 border-none">Show More</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner2} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-4xl font-bold text-black font-mono">Lego</h1>
                            <p className="py-6 text-xl text-black font-semibold">Spark creativity and endless fun with building playsets and more to inspire imaginations.</p>
                            <button className="btn btn-md bg-sky-400 text-white hover:bg-gray-100 hover:text-sky-400 border-none">Show More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner3} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-4xl font-bold text-black font-mono">Action Figure</h1>
                            <p className="py-6 text-xl text-black font-semibold ">Prepare for an exciting experience with these thrilling and captivating choices that spark your sense of adventure.</p>
                            <button className="btn btn-md bg-sky-400 text-white hover:bg-gray-100 hover:text-sky-400 border-none">Show More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white border-none text-gray-400 text-2xl hover:bg-gray-300 hover:text-sky-400">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;