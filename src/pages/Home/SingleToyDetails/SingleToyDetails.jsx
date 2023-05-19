import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
const SingleToyDetails = () => {
    const toys = useLoaderData();
    const { Seller, ToyName, SubCategory, Price, AvailableQuantity, DetailDescription, PictureURL, Rating, SellerEmail } = toys;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={PictureURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Seller Name:{Seller}</h2>
                <div className='flex gap-2'>
                    <p><span className='text-fuchsia-500 underline'>ToyName</span>:{ToyName}</p>
                    <p><span className='text-fuchsia-500 underline'>SubCategory</span>:{SubCategory}</p>
                </div>
                <div className='flex gap-2'>
                    <p><span className='text-fuchsia-500 underline'>Price</span>:${Price}</p>
                    <p><span className='text-fuchsia-500 underline'>Quantity</span>:{AvailableQuantity}</p>
                    <div className='flex gap-1'>
                        <p><span className='text-fuchsia-500 underline'>Rating</span>:{Rating}</p><FaStar className='mt-1' />
                    </div>
                </div>
                <p><span className='text-fuchsia-500 underline'>Email</span>:{SellerEmail}</p>
                <p><span className='text-fuchsia-500 underline'>Descriptions</span>:{DetailDescription}</p>
            </div>
        </div>
    )
}
export default SingleToyDetails;