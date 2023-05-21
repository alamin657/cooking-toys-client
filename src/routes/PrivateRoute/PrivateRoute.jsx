import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);


    // if (loading) {
    //     return <button type="button" class="bg-indigo-500 ..." >
    //         <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    //         </svg>
    //         Please Wait
    //     </button>
    // }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;