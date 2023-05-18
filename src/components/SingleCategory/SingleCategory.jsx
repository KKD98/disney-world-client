import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleCategory = ({ category }) => {
    const { picture_url, name, price, rating } = category;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={picture_url} alt="Movie" className='w-48 pl-2'/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className=' text-xl font-semibold'>Price: {price}</p>
                <div>

                </div>
                <div className='flex items-center w-[82%] lg:w-[47%]'>
                <p className=' text-xl font-semibold'>Rating:</p> 
                <div>
                <Rating
                            placeholderRating={rating}
                            emptySymbol= {<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                            placeholderSymbol={ <FaStar className='text-2xl text-yellow-600'></FaStar> }
                            fullSymbol= {<FaStar className='text-2xl text-yellow-600'></FaStar>}
                        />
                </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;