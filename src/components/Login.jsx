// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterPage from './Register';
import '../css/AuthPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

function LoginPage() {
    const [showRegister, setShowRegister] = useState(false);

    const toggleRegister = () => {
        setShowRegister(!showRegister);
    };

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData); // Here you can handle login form submission logic
    };

    return (
        <div className='col'>
            <Navbar />
            <div className="auth-container">
                {!showRegister && (
                    <>
                        <h2>Login</h2>
                        <form className="auth-form" onSubmit={handleLoginSubmit}>
                            <label htmlFor="email" className="auth-label">Email</label>
                            <input type="email" id="email" name="email" value={loginFormData.email} onChange={handleLoginChange} required />

                            <label htmlFor="password" className="auth-label">Password</label>
                            <input type="password" id="password" name="password" value={loginFormData.password} onChange={handleLoginChange} required />

                            <button type="submit" className="auth-submit">Login</button>
                        </form>
                        <p>
                            Don't have an account?{' '}
                            <button onClick={toggleRegister}>Signup</button>
                        </p>
                    </>
                )}
                {showRegister && <RegisterPage toggleRegister={toggleRegister} />}
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
