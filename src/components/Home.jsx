import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContexts';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.email && <h2 className='text-4xl font-mono font-semibold mt-4'>Welcome {user.email} !!</h2>
            }
            <div className='flex justify-center mt-4'>
                {
                    user?.photoURL && <img src={user.photoURL} alt="" />
                }
            </div>
        </div>
    );
};

export default Home;