import React from 'react';
import lego from '../../assets/lego.png'
import americangirl from '../../assets/American_Girl_Star_logo.svg.png'
import barbie from '../../assets/barbie.png'
import funko from '../../assets/funko.png'
import mattel from '../../assets/mattel.png'
import hasbro from '../../assets/hasbro.png'

const ToyPartners = () => {
    return (
        <div className='w-full lg:w-4/5 lg:mx-auto my-6 border-2 border-sky-400 p-4  lg:p-6 shadow-lg shadow-black'>
           <div className='grid grid-cols-2 lg:grid-cols-6 items-center gap-5'>
           <img src={lego} alt="" className='w-[120px] lg:w-[150px]'/>
            <img src={barbie} alt="" className='w-[120px] lg:w-[150px]'/>
            <img src={americangirl} alt="" className='w-[120px] lg:w-[150px]' />
            <img src={mattel} alt="" className='w-[120px] lg:w-[150px]'/>
            <img src={hasbro} alt="" className='w-[120px] lg:w-[150px]'/>
            <img src={funko} alt="" className='w-[120px] lg:w-[150px]'/>
           </div>
        </div>
    );
};

export default ToyPartners;