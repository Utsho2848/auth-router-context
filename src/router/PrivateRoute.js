import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <button className="btn btn-square loading"></button>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;