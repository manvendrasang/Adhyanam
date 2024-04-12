import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { FaAngleDown } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScholarshipClicked, setIsScholarshipClicked] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleScholarshipClick = () => {
        setIsScholarshipClicked(!isScholarshipClicked);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    ADHYANAM
                </Link>
                <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
                    <Link to="/" className="navbar-item" onClick={toggleNavbar}>
                        Home
                    </Link>
                    <div
                        className="navbar-item"
                        onClick={handleScholarshipClick}
                    >
                        Scholarships
                        <FaAngleDown />
                        {isScholarshipClicked && (
                            <div className="dropdown-content">
                                <Link to="/scholarships/category1">Category 1</Link>
                                <Link to="/scholarships/category2">Category 2</Link>
                                <Link to="/scholarships/category3">Category 3</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/faq" className="navbar-item" onClick={toggleNavbar}>
                        FAQ's
                    </Link>
                    <Link to="/intern" className="navbar-item" onClick={toggleNavbar}>
                        Internships
                    </Link>
                    <Link to="/contact" className="navbar-item" onClick={toggleNavbar}>
                        Contact
                    </Link>
                    <button className='btn'>
                        <Link to="/login" onClick={toggleNavbar}>
                            Login
                        </Link>
                    </button>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;