import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';
const SingleShopByCagory = ({ subCategory }) => {
    const { _id, PictureURL, Seller, Price, Rating } = subCategory;

    const handleReiewDetails = () => {
        Swal.fire(
            "Please Login"
        )
    }
    return (
        <div>
            <div className=" bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={PictureURL} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{Seller}</h2>
                    <div className='flex gap-1'>
                        <p>Price:{Price}</p>
                        <div className='flex gap-1'>
                            <p>Rataing:{Rating}</p><FaStar className='mt-1'></FaStar>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/toys/${_id}`}><button onClick={handleReiewDetails} className="btn btn-primary">Review Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleShopByCagory;