import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import SingleMyToys from './SingleMyToys';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])
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
                        myToys.map(myToy => <SingleMyToys
                            key={myToy._id}
                            myToy={myToy}></SingleMyToys>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;