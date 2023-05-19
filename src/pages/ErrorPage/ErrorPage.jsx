import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section >
            <div >
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0TlM1Bsuwp-vQ-mdRpt28ZBr2GyH9WQa_g&usqp=CAU" alt="" />

                <div className='max-w-md text-center mt-4'>
                    {/* <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    className='container flex flex-col items-center justify-center px-5 mx-auto my-8 mt-2' */}
                    {/* <p className='text-2xl font-semibold md:text-3xl mb-8'>

                    className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'
                        {error?.message}
                    </p> */}
                    <Link
                        to='/'
                        className='px-8 text-center py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                    >
                        Please homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;