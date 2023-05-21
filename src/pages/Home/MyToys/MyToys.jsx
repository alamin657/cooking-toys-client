import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import SingleMyToys from './SingleMyToys';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [cookingToys, setCookingToys] = useState([])
    useTitle('mytoys')
    useEffect(() => {
        fetch(`https://cooking-toys-server-alamin657.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCookingToys(data)
            })
    }, [user])


    const handleDelete = _id => {
        const proceed = confirm('Are you sure want to deleted')
        if (proceed) {
            fetch(`https://cooking-toys-server-alamin657.vercel.app/toys/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted succesfull')
                        const remaining = cookingToys.filter(cookingToy => cookingToy._id !== _id)
                        console.log(remaining)
                        setCookingToys(remaining);
                    }
                })
        }

    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Picture URL</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cookingToys.map(myToy => <SingleMyToys
                            key={myToy._id}
                            myToy={myToy}
                            handleDelete={handleDelete}></SingleMyToys>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;