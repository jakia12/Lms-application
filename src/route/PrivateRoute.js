import React from 'react'
import { AuthState } from '../context/AuthContext'

import { Blocks } from 'react-loader-spinner'

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = AuthState();

    const location = useLocation();

    if (loading) {
        return <div className="text-center py-10">
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }


    //check if user not logged in or not
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;

}

export default PrivateRoute
