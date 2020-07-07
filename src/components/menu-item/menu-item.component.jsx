import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, size, history, match }) => (
    <div 
        className={`menu-item ${size}`} 
        onClick={() => history.push(`${match.url}shop/${title}`)}>
        <div 
            className='background-image' 
            style={{ backgroundImage: `url(/images/${title}.jpg)` }}>
            <div className="black-background" />
        </div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{size === 'large' ? 'Shop' : null}</span>
        </div>
    </div>
)

export default withRouter(MenuItem);