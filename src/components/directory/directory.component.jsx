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
                },
                {
                    title: "cake",
                    image: "/images/cake.jpg",
                    id: 2,
                },
                {
                    title: "drinks",
                    image: "/images/drinks.jpg",
                    id: 3,
                },
                {
                    title: "wine",
                    image: "/images/wine.jpg",
                    size: "large",
                    id:4
                },
                {
                    title: "salad",
                    image: "/images/salad.jpg",
                    size: "large",
                    id:5
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
               {
               this.state.sections.map(({title, image, id, size}) => (
                   <MenuItem key={id} title={title} image={image} size={size} />
               ))
               } 
            </div>
        )
    }
}

export default Directory;