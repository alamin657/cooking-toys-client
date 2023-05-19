import React from 'react';
import { Link } from 'react-router-dom';

const SignleAllToys = ({ toy }) => {
    const { _id, Seller, ToyName, SubCategory, Price, AvailableQuantity } = toy;

    return (
        <tr>

            <td>{Seller}</td>
            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <Link to={`/toys/${_id}`}><button className='btn btn-primary rounded-md mt-2'>View Details</button></Link>
        </tr>
    );
};

export default SignleAllToys;
