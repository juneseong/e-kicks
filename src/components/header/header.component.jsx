import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div 
        className='header'>
        <div></div>
        <div className='logo-container'>
            <Link to='/' className='logo'>
                <h1>e-kicks</h1>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            {
                currentUser 
                ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                : <Link className='option' to='/signin'>Sign In</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);