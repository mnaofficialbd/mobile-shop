import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
    cart: { cartItems: [] }
}

function reducer(state, action) {
    switch (action.type) {
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item.slug === newItem.slug
            );
            const cartItems = existItem ? state.cart.cartItems.map(
                (item) => item.phone_name === existItem.phone_name ? newItem : item
            )
                : [...state.cart.cartItems, newItem];
            return { ...state, cart: { ...state.cart, cartItems } }
        }
        default:
            return state;
    }
}