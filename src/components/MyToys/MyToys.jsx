import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyToys = () => {
    return (
        <div className='my-4 py-4'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-center'>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td><button className="btn btn-outline btn-info">Update</button></td>
                            <td><button className="btn btn-circle btn-outline border-sky-600 hover:bg-sky-500 ">
                            <FaTrashAlt className='text-2xl text-sky-600 hover:text-black'></FaTrashAlt>
                            </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;