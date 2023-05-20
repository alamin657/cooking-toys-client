import React from 'react';

const SingleShopByCagory = ({ subCategory }) => {
    const { PictureURL, Seller, Price, Rating } = subCategory;
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
                        <p>Rataing:{Rating}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleShopByCagory;