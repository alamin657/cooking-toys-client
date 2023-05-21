import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div data-aos-duration="3000" data-aos="fade-up-left">
            <div className='gap-2' >
                <div className='border border-red-500 bg-slate-500 mt-2 p-4'>
                    <h2 className='text-3xl'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <h2><span className='text-orange-300 underline'>Access Token</span>:Access token is a credential that is issued to a client (such as a web or mobile application) by an authentication server after a successful authentication process.</h2>
                    <p><span className='text-orange-300 underline'>Work</span>: Access tokens should be stored securely on the client-side to prevent unauthorized access. One common approach is to store them in memory or in a secure storage mechanism provided by the operating system or framework. </p>
                    <p><span className='text-orange-300 underline'>Refresh Token</span>:A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process. </p>
                    <p><span className='text-orange-300 underline'>Work</span>:Refresh tokens should be stored securely on the client-side as well. They are typically stored in a location with stronger security, such as encrypted cookies, secure HTTP-only cookies, or native secure storage mechanisms provided by the operating system or framework.</p>
                </div>
                <div className='border border-red-500 bg-slate-500 mt-2  p-4'>
                    <h1 className='text-3xl'>2.Compare SQL and NoSQL databases?</h1>
                    <p><span className='text-orange-300 underline'>SQL</span>:Stands for Structured Query Language,Relational database management system (RDBMS),Data is stored in tables with columns and rows,Uses normalized data structure
                    </p>
                    <p><span className='text-orange-300 underline'>NoSQL</span>:Stands for Not Only SQL,Non-relational database management system,Data is stored in collections or documents,	Uses denormalized data structure</p>
                </div>
                <div className='border border-red-500 bg-slate-500 mt-2  p-4'>
                    <h2 className='text-3xl'>3.What is express js? What is Nest JS? </h2>
                    <p><span className='text-orange-300 underline'>Nest JS</span>:Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.</p>
                    <p><span className='text-orange-300 underline'>Express JS</span>:Express is a node js web application framework that provides broad features for building web and mobile applications. </p>
                </div>
                <div className='border border-red-500 bg-slate-500 mt-2  p-4'>
                    <h1 className='text-3xl'>4.What is MongoDB aggregate and how does it work?</h1>
                    <p>In MongoDB, the aggregate operation is used for advanced data processing and analysis. It allows you to perform complex queries, transformations, and aggregations on collections of documents. </p>
                    <p><span className='text-orange-300 underline'>Work</span>:Aggregations in MongoDB are powerful tools for data analysis, reporting, and deriving meaningful insights from your data. They allow you to perform complex transformations and calculations on large datasets efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;