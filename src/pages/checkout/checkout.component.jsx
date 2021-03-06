import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <>
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
            </div>
            {
                cartItems.length > 0
                ? cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                : <span className='empty-message'>No items.</span>
            }
            <div className='total'>
                <span>{total}.00 USD</span>
            </div>
        </div>
        <div className='checkout-button'>
            <StripeCheckoutButton price={total} />
        </div>
    </>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);