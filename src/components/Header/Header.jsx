import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const userName = user?.displayName ? user.displayName : '';
    const userPicture = user?.photoURL ? user.photoURL : '';

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <p className='text-3xl font-mono font-semibold text-sky-400'>Disney World</p>
            </div>
            <div className="navbar-center lg:hidden">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text- sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                            return {
                                color: isActive && "#00BFFF"
                            };
                        }}>Home</NavLink>
                        <NavLink to="/alltoys" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                            return {
                                color: isActive && "#00BFFF"
                            };
                        }}>All Toys</NavLink>

                       {
                        user && 
                        <NavLink to="/mytoys" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                            return {
                                color: isActive && "#00BFFF"
                            };
                        }}>My Toys</NavLink>
                       }

                       {
                        user && 
                        <NavLink to="/addatoy" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                            return {
                                color: isActive && "#00BFFF"
                            };
                        }}>Add a Toy</NavLink>
                       }

                        <NavLink to="/blogs" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                            return {
                                color: isActive && "#00BFFF"
                            };
                        }}>Blogs</NavLink>
                    </ul>
                </div>
            </div>
            <div className='navbar-center hidden lg:flex lg:gap-3 lg:mx-auto lg:justify-center lg:w-[35%]'>
                <NavLink to="/" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                    return {
                        color: isActive && "#00BFFF"
                    };
                }}>Home</NavLink>
                <NavLink to="/alltoys" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                    return {
                        color: isActive && "#00BFFF"
                    };
                }}>All Toys</NavLink>

                {
                    user && 
                    <NavLink to="/mytoys" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                    return {
                        color: isActive && "#00BFFF"
                    };
                }}>My Toys</NavLink>
                }

                {
                    user && 
                    <NavLink to="/addatoy" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                    return {
                        color: isActive && "#00BFFF"
                    };
                }}>Add a Toy</NavLink>
                }

                <NavLink to="/blogs" className='text-xl text-black hover:text- sky-400 font-semibold' style={({ isActive }) => {
                    return {
                        color: isActive && "#00BFFF"
                    };
                }}>Blogs</NavLink>
            </div>

            <div className="navbar-end">
            <Tooltip  id="my-tooltip"></Tooltip>
                {
                    userPicture &&
                    <div className="avatar mr-3">
                        <div className="w-12 rounded-full" data-tooltip-id='my-tooltip' data-tooltip-content={userName}>
                            <img src={userPicture}/>
                        </div>
                    </div>
                }
                {
                    user ? <Link onClick={handleLogOut}>
                        <button className="btn btn-md bg-sky-400 text-white hover:bg-gray-100 hover:text-sky-400 border-none">Logout</button>
                    </Link> :
                        <Link to="/login">
                            <button className="btn btn-md bg-sky-400 text-white hover:bg-gray-100 hover:text-sky-400 border-none">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;