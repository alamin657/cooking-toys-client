import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const SingleMyToys = ({ myToy }) => {
    const { _id, Seller, PictureURL, Rating, ToyName, SubCategory, Price, AvailableQuantity } = myToy;
    const [cookingToys, setCookingToys] = useState([])
    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:4000/toys/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = cookingToys.filter(cookingToy => cookingToy._id !== id)
                                setCookingToys(remaining);

                            }
                        })
                }
            })

    }
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={PictureURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {Seller}
            </td>
            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <td>{Rating}</td>
            <th className='flex gap-1 mt-6'>
                <Link to={`/updatetoys/${_id}`}><FaEdit></FaEdit></Link> <FaTrash onClick={() => handleDelete(_id)}></FaTrash>
                {/* <Link to={`/toys/${__id}`}><button className="btn btn-ghost btn-xs">View details</button></Link> */}
            </th>
        </tr>
    );
};

export default SingleMyToys;