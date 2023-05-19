import React, { useEffect, useState } from 'react';
import AllToysRow from '../AllToysRow/AllToysRow';

const AllToys = () => {
    const [allToys , setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
        .then(res => res.json())
        .then(data => {
            setAllToys(data)
        })
    } , [])
    return (
        <div className='my-6'>
            <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    {/* head */}
    <thead>
      <tr className='text-center'>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
    {
        allToys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;