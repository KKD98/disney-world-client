import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy}) => {
  const {_id} = toy;
    return (
        <tr className='text-center'>
        <td className='font-semibold'>{toy.sellerName ? toy.sellerName : 'Test'}</td>
        <td className='font-semibold'>{toy.name}</td>
        <td className='font-semibold'>{toy.category}</td>
        <td className='font-semibold'>${toy.price}</td>
        <td className='font-semibold'>{toy.quantity ? toy.quantity : 1}</td>
        <td>
        <Link to={`/viewdetails/${_id}`}>
                    <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">View Details</button>
                    </Link>
        </td>
      </tr>
    );
};

export default AllToysRow;