import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-900 border-b px-8">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">PHero</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-x-4 font-semibold">
                    <Link to="/home"><a>Home</a></Link>
                    <Link to="/order"><a>Order</a></Link>
                    <Link to="/register"><a>Register</a></Link>

                    {!user?.email ?
                        <Link to="/login"><a>Log In</a></Link>
                        :
                        <>
                            {user?.photoURL ? <img className='h-8 w-8 rounded-full' src={user.photoURL} alt="" /> :
                                <p>{user.email}</p>}
                            <button onClick={handleLogOut} className="btn btn-sm">Log Out</button> </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;