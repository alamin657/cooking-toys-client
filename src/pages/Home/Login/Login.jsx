import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleProviderSignIn, error, setError } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Your LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const handleGoogle = () => {
        googleProviderSignIn()
            .then(result => {
                const user = result.user;
                setError('')
                Swal.fire({
                    icon: 'success',
                    title: 'Your Google LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Login</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary">Login</button> <br />
                            <button onClick={handleGoogle} className="btn btn-outline btn-secondary">Google</button>

                        </div>
                        <label className="label">
                            <Link to="/register">Please <span className='text-orange-500 label-text-alt link link-hover'>Sign Up</span></Link>
                        </label>
                    </form>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;