import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SingleMyToys = ({ myToy, handleDelete }) => {

    const { _id, Seller, PictureURL, Rating, ToyName, SubCategory, Price, AvailableQuantity } = myToy;


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
            </th>
        </tr>
    );
};

export default SingleMyToys;