import React from 'react';

const AllToysRow = ({toy}) => {
    return (
        <tr className='text-center'>
        <td className='font-semibold'>{toy.seller_name ? toy.seller_name : 'Test'}</td>
        <td className='font-semibold'>{toy.name}</td>
        <td className='font-semibold'>{toy.category}</td>
        <td className='font-semibold'>{toy.price}</td>
        <td className='font-semibold'>{toy.quantity ? toy.quantity : 1}</td>
        <td><button className="btn btn-outline border-2 btn-info">View Details</button></td>
      </tr>
    );
};

export default AllToysRow;