import React from 'react';

const SignleAllToys = ({ toy }) => {
    const { Seller, ToyName, SubCategory, Price, AvailableQuantity } = toy;

    return (
        <tr>

            <td>{Seller}</td>
            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <button className='btn btn-primary rounded-md mt-2'>View Details</button>
        </tr>
    );
};

export default SignleAllToys;
