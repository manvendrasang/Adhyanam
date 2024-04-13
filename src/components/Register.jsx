// RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AuthPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

function RegisterPage({ toggleRegister }) {
    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({
            ...registerFormData,
            [name]: value
        });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(registerFormData); // Here you can handle registration form submission logic
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
                <label htmlFor="name" className="auth-label">Name</label>
                <input type="text" id="name" name="name" value={registerFormData.name} onChange={handleRegisterChange} required />

                <label htmlFor="email" className="auth-label">Email</label>
                <input type="email" id="email" name="email" value={registerFormData.email} onChange={handleRegisterChange} required />

                <label htmlFor="password" className="auth-label">Password</label>
                <input type="password" id="password" name="password" value={registerFormData.password} onChange={handleRegisterChange} required />

                <button type="submit" className="auth-submit">Register</button>
            </form>
            <p>
                Already have an account?{' '}
                <Link to="/login" onClick={toggleRegister}>Login here</Link>
            </p>
        </div>
    );
}

export default RegisterPage;
