import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);