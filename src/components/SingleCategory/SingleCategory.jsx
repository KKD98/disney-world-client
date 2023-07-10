import React, { useContext } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SingleCategory = ({ category }) => {
    const { user } = useContext(AuthContext);
    const { _id, picture_url, name, price, rating } = category;

    const handleAlert = () => {
        if (!user) {
            Swal.fire({
                title: 'You have to login first to view details',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }
    return (
        <div className="flex flex-col gap-2 w-[80%] mx-auto lg:w-full justify-center items-center shadow-xl shadow-black">

            <div className='flex flex-col justify-center items-center border-2 border-gray-300 w-full py-3 px-2'>
                <h2 className="text-xl font-mono font-semibold mb-2">{name}</h2>
                <div>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar className='text-xl text-yellow-600'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                        fullSymbol={<FaStar className='text-xl text-yellow-600'></FaStar>}
                    />
                </div>
            </div>
            <img src={picture_url} alt="toypic" className='w-[250px] h-[250px] p-3' />
            <div className="flex flex-col justify-start items-start bg-pink-400 w-full p-3">

                <p className='mb-1 text-xl font-semibold'>${price}</p>

                <div >
                    <Link to={`/viewdetails/${_id}`}>
                        <button onClick={handleAlert} className="btn p-0 hover:p-0 bg-pink-400 text-white border-none hover:bg-pink-400  hover:text-black">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;