import React from 'react';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g3 from '../../assets/g3.jpg';
import g4 from '../../assets/g4.jpg';
import g5 from '../../assets/g5.jpg';
import g6 from '../../assets/g6.jpg';
import g7 from '../../assets/g7.jpg';
import g8 from '../../assets/g8.jpg';

const GallerySection = () => {
  return (
    <div className='mb-5'>
      <p className='text-sky-400 text-center text-4xl'>--------------------</p>
      <h1 className='text-3xl text-center font-semibold text-black font-mono'>Disney Gallery</h1>
      <p className='text-sky-400 text-center text-4xl'>--------------------</p>

      <div className='grid grid-cols-2 lg:grid-cols-4  w-full lg:w-4/5 mx-auto p-2'>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g1} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g2} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g3} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g4} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g5} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
          <img src={g6} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g7} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-6 w-full h-[300px] lg:h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300'>
          <img src={g8} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
