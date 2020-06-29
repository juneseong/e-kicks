import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    state = {
        sections: [{
                title: 'Nike',
                imageUrl: '/images/nike.jpg',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'Reebok',
                imageUrl: '/images/reebok.jpg',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'Adidas',
                imageUrl: '/images/adidas.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'Womens',
                imageUrl: '/images/womens.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'Mens',
                imageUrl: '/images/mens.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }]
    };

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory;