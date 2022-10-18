import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const Register = () => {
    const { createUser, signInGoogle } = useContext(AuthContext)

    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userName = form.name.value;
        const address = form.address.value;
        console.log(email, password, userName, address)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/home')
                console.log(user)
            })
            .catch(error => {
                console.error('error:', error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already Have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-sm">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;