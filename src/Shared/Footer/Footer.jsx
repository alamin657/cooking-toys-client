import React from 'react';
import logo from '../../assets/images/kitchen-set.png'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-cyan-400 text-base-content mt-1">
                <div>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <p>Cooking Toys</p>
                </div>
                <div>
                    <span className="footer-title">Socail Media</span>
                    <div className='flex gap-4'>
                        <a className="link link-hover">Login</a>
                        <a className="link link-hover">Register</a>
                        <a className="link link-hover">Google</a>
                    </div>

                    <div className='text-center mt-2'>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </div>


                <div >
                    <span className="footer-title">Contact Information</span>
                    <div className='flex gap-4'>
                        <FaFacebook />
                        <FaYoutube />
                        <FaTwitter />
                    </div>


                </div>
            </footer>

        </>
    );
};

export default Footer;