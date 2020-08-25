const INITIAL_STATE = {
    sections: [
        {
            title: "pizza",
            image: "/images/pizza.jpg",
            id: 1,
            linkUrl: "shop/pizza"
        },
        {
            title: "cakes",
            image: "/images/cake.jpg",
            id: 2,
            linkUrl: "shop/cakes"
        },
        {
            title: "drinks",
            image: "/images/drinks.jpg",
            id: 3,
            linkUrl: "shop/drinks"
        },
        {
            title: "wine",
            image: "/images/wine.jpg",
            size: "large",
            id:4,
            linkUrl: "shop/wine"
        },
        {
            title: "salad",
            image: "/images/salad.jpg",
            size: "large",
            id:5,
            linkUrl: "shop/%20salad%20"
        },
        {
            title: "burger",
            image: "/images/burgger.jpg",
            size: "large",
            id: 6,
            linkUrl: "shop/burger"
        },
        {
            title: "pasta",
            image: "/images/pasta.jpg",
            size: "large",
            id: 7,
            linkUrl: "shop/pasta"
        },
        {
            title: "nigerian-dish",
            image: "/images/nigerian.jpg",
            size: "large",
            id:8,
            linkUrl: "shop/nigeriandish"
        },
        {
            title: "sandwich",
            image: "/images/sandwich.jpg",
            size: "large",
            id: 9,
            linkUrl: "shop/sandwich"
        }
        
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;