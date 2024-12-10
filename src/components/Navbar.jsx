import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogin, handleLogout }) => (
    <div className="mx-6 ">
        <header className=" text-white text-xl p-4 flex justify-between items-center  rounded">
        {/* Left: User Picture */}
        <div className="border-yellow-300 border-2 w-10 h-10 rounded-full overflow-hidden">
           <Link to='./profile'>
           <img
                src="/user.png"
                alt="User"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
            />
           </Link>
           

        </div>
        <h1 className="font-semibold	">Balance: 500 TK</h1>

                <Link to='./'>
                <button>Home</button>
                </Link>
        {/* Right: Login/Logout Button */}
        <div>
            {isLoggedIn ? (
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Logout
                </button>
            ) : (
                <Link to='/login'>
                <button
                    onClick={handleLogin}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Login
                </button>
                </Link>
            )}
        </div>
    </header>
    </div>
);

export default Navbar;
