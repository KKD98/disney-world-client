import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AllToysRow = ({toy}) => {
  const {user} = useContext(AuthContext);
  const {_id} = toy;

  const handleAlert = () => {
    if(!user){
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
        <tr className='text-center'>
        <td className='font-semibold'>{toy.sellerName ? toy.sellerName : 'Test'}</td>
        <td className='font-semibold'>{toy.name}</td>
        <td className='font-semibold'>{toy.category}</td>
        <td className='font-semibold'>${toy.price}</td>
        <td className='font-semibold'>{toy.quantity ? toy.quantity : 1}</td>
        <td>
        <Link to={`/viewdetails/${_id}`}>
                    <button onClick={handleAlert} className="btn btn-outline border-2 border-sky-400 hover:bg-sky-400 hover:text-white hover:border-sky-400">View Details</button>
                    </Link>
        </td>
      </tr>
    );
};

export default AllToysRow;