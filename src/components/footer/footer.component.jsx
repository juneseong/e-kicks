import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='footer-container'>
        <div className='footer'>
            <div className='footer-left'>
                <span className='title'>Shop</span>
                <Link to='/shop/nike'><p>Nike</p></Link>
                <Link to='/shop/reebok'><p>Reebok</p></Link>
                <Link to='/shop/adidas'><p>Adidas</p></Link>
                <Link to='/shop/womens'><p>Womens</p></Link>
                <Link to='/shop/mens'><p>Mens</p></Link>
            </div>
            <div className='footer-middle'>
                <span className='title'>Contact</span>
                <a href='https://juneseong.com' target='_blank' rel="noopener noreferrer"><p>Portfolio</p></a>
                <a href='https://github.com/juneseong' target='_blank' rel="noopener noreferrer"><p>Github</p></a>
                <a href='https://linkedin.com/in/juneseong' target='_blank' rel="noopener noreferrer"><p>LinkedIn</p></a>
                <a href='https://angel.co/u/june-seong' target='_blank' rel="noopener noreferrer"><p>AngelList</p></a>
            </div>
            <div className='footer-right'>
                <div className='logo-container'>
                    <Link to='/' className='logo'>
                        <h1>e-kicks</h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;