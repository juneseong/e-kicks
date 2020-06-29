import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    state = {
        sections: [{
                title: 'nike',
                id: 1
            },
            {
                title: 'reebok',
                id: 3
            },
            {
                title: 'adidas',
                id: 2
            },
            {
                title: 'womens',
                size: 'large',
                id: 4
            },
            {
                title: 'mens',
                size: 'large',
                id: 5
            }]
    };

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;