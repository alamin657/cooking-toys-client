
import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const AddAToy = () => {

    useTitle('addatoy')
    const { user } = useContext(AuthContext)
    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const Seller = form.Seller.value;
        const ToyName = form.ToyName.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const SubCategory = form.SubCategory.value;
        const AvailableQuantity = form.AvailableQuantity.value;
        const PictureURL = form.PictureURL.value;
        const SellerEmail = form.SellerEmail.value;
        const DetailDescription = form.DetailDescription.value;
        const data = {
            Seller, ToyName, Price, Rating, SubCategory, AvailableQuantity, PictureURL, SellerEmail, DetailDescription
        }

        console.log(Seller, ToyName, Price, Rating, SubCategory, AvailableQuantity, PictureURL, SellerEmail, DetailDescription);
        console.log(data)
        fetch('https://cooking-toys-server-alamin657.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    }
    const handlePost = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Mytoys Update  Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div  >
            <div className='bg-pink-400 w-full h-full'>
                <div className=" min-h-screen">
                    <div className="hero-content  ">

                        <div className=" flex-shrink-0     ">
                            <form onSubmit={handleAddAToy} className="card-body">

                                <div className=" flex gap-2">
                                    <input type="text" name='Seller' placeholder="Seller" className="input input-bordered" required />
                                    <input type="text" name='ToyName' placeholder="ToyName" className="input input-bordered" required />
                                </div>

                                <div className=" flex gap-2">
                                    <input type="text" name='Price' placeholder="Price" className="input input-bordered" required />
                                    <input type="text" name='Rating' placeholder="Rating" className="input input-bordered" required />
                                </div>

                                <div className=" flex gap-2">
                                    <select name='SubCategory'>
                                        <option value="Play Kitchen">Play Kitchen</option>
                                        <option value="Baking">Baking</option>
                                        <option value="Outdoor Grilling">Outdoor Grilling</option>
                                        <option value="Cooking Utensils">Cooking Utensils</option>
                                        <option value="Sushi Making">Sushi Making</option>
                                    </select>
                                    <input type="text" name='AvailableQuantity' placeholder="AvailableQuantity" className="input input-bordered" required />
                                </div>

                                <div className=" flex gap-2">
                                    <input type="text" name='PictureURL' placeholder="PictureURL" className="input input-bordered" required />
                                    <input type="text" name='SellerEmail' placeholder="SellerEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                                <input type="text" name='DetailDescription' placeholder="DetailDescription" className="input input-bordered" required />
                                <div className="form-control mt-6">
                                    <button onClick={handlePost} className="btn btn-primary">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;