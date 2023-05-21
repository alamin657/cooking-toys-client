import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-lime-400 data-aos">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div data-aos-duration="4000" data-aos="fade-up-left">
                    <h1 className="text-3xl font-bold">Baby doli food cart and cooking toys play</h1>
                    <p className="py-6">These cooking toys are crafted with meticulous attention to detail, featuring realistic designs and interactive functions that mimic the experience of a real kitchen. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img src="https://i.ytimg.com/vi/RPz2JW5OQk4/maxresdefault.jpg" className="md:w-1/2 md:h-1/2 sm:w-full sm:h-full rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;