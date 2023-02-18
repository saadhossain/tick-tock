import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginRegistar from '../assests/login-registar.png';

const Registrar: React.FC = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between items-center mt-10 gap-10'>
            {/* Login/Registe Image */}
            <img src={LoginRegistar} alt='Login/Registar' className='w-2/4' />
            {/* Login/Register Form */}
            <div className="w-2/4 p-8 space-y-3 rounded-xl bg-secondary dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Create an Account</h1>
                <form className="space-y-6 ng-untouched ng-pristine ng-valid text-white">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-lg font-semibold">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md bg-purpledark" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-lg font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-purpledark" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-lg bg-primary hover:bg-purpledark duration-500 ease-in-out text-white font-semibold bg-se">Create account</button>
                </form>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 bg-purpledark hover:bg-primary duration-500 ease-in-out px-5 flex items-center gap-2 rounded-lg">
                        <FaGoogle /> Register with Google
                    </button>
                </div>
                <p className="text-md text-center sm:px-6 ">Already have an account?
                    <Link to='/login' className="font-semibold ml-2">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Registrar;