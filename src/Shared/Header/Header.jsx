import React, { useContext } from 'react';
import logo from '../../assets/images/kitchen-set.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="navbar bg-cyan-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user ?
                                <>
                                    <li className='text-3xl font-bold'><Link to='/'>Home</Link></li>
                                    <li className='text-2xl'><Link to='/alltoys'>All Toys</Link></li>
                                    <li className='text-2xl'><Link to='/addatoy'>Add A Toy</Link></li>
                                    <li className='text-2xl'><Link to='/blog'>Blog</Link></li>
                                    <li className='text-2xl'><Link to='/mytoys'>My Toys</Link></li>
                                </>
                                :
                                <>
                                    <li className='text-2xl'><Link to='/'>Home</Link></li>
                                    <li className='text-2xl'><Link to='/alltoys'>All Toys</Link></li>
                                    <li className='text-2xl'><Link to='/blog'>Blog</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <img className='w-12 h-12' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-xl">Cooking Toys</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {
                        user ?
                            <>
                                <li className='text-2xl'><Link to='/'>Home</Link></li>
                                <li className='text-2xl'><Link to='/alltoys'>All Toys</Link></li>
                                <li className='text-2xl'><Link to='/addatoy'>Add A Toy</Link></li>
                                <li className='text-2xl'><Link to='/blog'>Blog</Link></li>
                                <li className='text-2xl'><Link to='/mytoys'>My Toys</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/alltoys'>All Toys</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end gap-1">

                {
                    user ? <button onClick={handleLogout} className=' bg-orange-400 rounded-full p-3'>SignOut</button> :
                        <Link to='/login'><button className=' bg-orange-400 rounded-full p-3'>SignIn</button></Link>
                }
                {
                    user && <img title={user?.displayName} className="rounded-full w-8 mr-1" src={user?.photoURL}></img>
                }

            </div>
        </div>
    );
};

export default Header;