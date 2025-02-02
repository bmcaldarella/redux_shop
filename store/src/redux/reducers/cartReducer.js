import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
    inventory: [
        { name: 'T-Shirt1', img: '/images/image1.webp', price: 18.99 },
        { name: 'T-Shirt2', img: '/images/images3.webp', price: 18.99 },
        { name: 'T-Shirt3', img: '/images/image4.webp', price: 18.99 },
        { name: 'trousers1', img: '/images/image5.webp', price: 18.99 },
        { name: 'trousers2', img: '/images/image6.webp', price: 18.99 },
        { name: 'trousers3', img: '/images/image7.webp', price: 18.99 },
        { name: 'Hoodie1', img: '/images/image8.webp', price: 49.99 },
        { name: 'Hoodie2', img: '/images/image9.webp', price: 49.99 },
        { name: 'Hoodie3', img: '/images/image10.webp', price: 49.99 },
    ],
    cart: [],
    total: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const item = state.inventory.find(product => product.name === action.payload);
            if (!item) return state;

            const existingItem = state.cart.find(product => product.name === item.name);

            let updatedCart;
            if (existingItem) {
                updatedCart = state.cart.map(product =>
                    product.name === item.name
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            } else {
                updatedCart = [...state.cart, { ...item, quantity: 1 }];
            }

            return {
                ...state,
                cart: updatedCart,
                total: state.total + item.price
            };
        }

        case 'REMOVE_FROM_CART': {
            const itemToRemove = state.cart.find(product => product.name === action.payload);
            if (!itemToRemove) return state;

            let updatedCart = state.cart
                .map(product =>
                    product.name === itemToRemove.name
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
                .filter(product => product.quantity > 0);

            return {
                ...state,
                cart: updatedCart,
                total: state.total - itemToRemove.price
            };
        }

        default:
            return state;
    }
};
