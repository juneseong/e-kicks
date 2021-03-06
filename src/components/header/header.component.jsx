import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden, history }) => (
    <>
        {history.location.pathname === '/checkout'
            ? <div className='test-warning'>
                Sample Credit Card
                <br />
                <span className='card-info'>
                    4242 4242 4242 4242 / 01.22 / 123
                </span>
            </div>
            : null}
        <div 
            className='header' style={{ marginTop: history.location.pathname === '/checkout' ? '60px' : '' }}>
            <div className='empty'></div>
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
                {hidden ? null : <CartDropdown />}
            </div>

        </div>
    </>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(Header));