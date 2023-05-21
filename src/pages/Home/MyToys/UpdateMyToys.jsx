import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const UpdateMyToys = () => {
    const toys = useLoaderData()
    const { _id, AvailableQuantity, Price, DetailDescription } = toys;
    useTitle('UpdateToys')
    const updateMyToys = event => {
        event.preventDefault();
        const form = event.target;
        const Price = form.Price.value;
        const AvailableQuantity = form.AvailableQuantity.value;
        const DetailDescription = form.DetailDescription.value;
        const update = { Price, AvailableQuantity, DetailDescription }
        fetch(`https://cooking-toys-server-alamin657.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Mytoys Update  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <form onSubmit={updateMyToys} className='ml-8'>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">

                    <input type="text" name='Price' placeholder="Price" defaultValue={Price} className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">

                    <input type="text" name='AvailableQuantity' defaultValue={AvailableQuantity} placeholder="AvailableQuantity" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">
                        DetailDescription</span>
                </label>
                <label className="input-group">

                    <input type="text" name='DetailDescription' defaultValue={DetailDescription} placeholder="DetailDescription" className="input input-bordered w-full" />
                </label>
            </div>
            <input type="submit" value='update mytoys' className='btn btn-primary mt-2' />
        </form>
    );
};

export default UpdateMyToys;