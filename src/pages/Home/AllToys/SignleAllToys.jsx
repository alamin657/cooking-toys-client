import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const SignleAllToys = ({ toy }) => {
    const { _id, Seller, ToyName, SubCategory, Price, AvailableQuantity } = toy;
    const { user } = useContext(AuthContext)
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
