import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Pizza",
                    image: "/images/pizza.jpg",
                    id: 1,
                    linkUrl: 'pizza'
                },
                {
                    title: "cake",
                    image: "/images/cake.jpg",
                    id: 2,
                    linkUrl: " "
                },
                {
                    title: "drinks",
                    image: "/images/drinks.jpg",
                    id: 3,
                    linkUrl: " "
                },
                {
                    title: "wine",
                    image: "/images/wine.jpg",
                    size: "large",
                    id:4,
                    linkUrl: " "
                },
                {
                    title: "salad",
                    image: "/images/salad.jpg",
                    size: "large",
                    id:5,
                    linkUrl: " "
                },
                
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
               {
               this.state.sections.map(({id, ...otherSectionProps}) => (
                   <MenuItem key={id} {...otherSectionProps} />
               ))
               } 
            </div>
        )
    }
}

export default Directory;