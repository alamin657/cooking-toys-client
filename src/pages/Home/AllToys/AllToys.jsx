import React, { useEffect, useState } from 'react';
import SignleAllToys from './SignleAllToys';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table  table-compact w-full ">
                <thead>
                    <tr >
                        <th className='bg-teal-400'>Seller Name</th>
                        <th className='bg-teal-400'>Toy Name</th>
                        <th className='bg-teal-400'>Sub Category</th>
                        <th className='bg-teal-400'>Available Quantity</th>
                        <th className='bg-teal-400'>Price</th>
                        <th className='bg-teal-400'>Action</th>
                    </tr>
                </thead>
                <tbody >


                    {
                        toys.map(toy => <SignleAllToys
                            key={toy._id}
                            toy={toy}>
                        </SignleAllToys>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;