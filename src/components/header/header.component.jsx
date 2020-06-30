import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/' className='logo'>
                <h1>e-kicks</h1>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
        </div>
    </div>
)

export default Header;