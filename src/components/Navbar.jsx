import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../assets/images/logo.jpg';
import { signInWithGoogle, signOut, getCurrentUser } from '../firebaseAuth';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithGoogle();
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut();
            setIsLoggedIn(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const user = await getCurrentUser();
                if (user) {
                    setIsLoggedIn(true);
                    setUserName(user.displayName);
                }
            } catch (error) {
                console.log(error);
            }
        };

        checkAuthentication();
    }, []);




    return (
        <nav className={`navbar ${isLoggedIn ? 'authenticated' : ''}`}>
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" className="logo-image" />
            </div>
            <ul className="navbar-list">
                {isLoggedIn ? (
                    <li className="navbar-welcome">
                        Welcome, {userName}
                        <button className="navbar-button" onClick={handleLogout} style={{ marginLeft: "20px" }}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <li>
                        <button className="navbar-button" onClick={handleLogin}>
                            Login
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
