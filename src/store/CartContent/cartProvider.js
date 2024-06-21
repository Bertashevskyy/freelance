import {CartContent} from "./cart-content";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM'){
        // const updatedItems =
    }
    return defaultCartState;
};


export const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatch({type: 'ADD_ITEM', item: item})
    };

    const deleteItemHandler = (id) => {
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler
    }

    return (
        <CartContent.Provider value={cartContext}>
            {props.children}
        </CartContent.Provider>
    );
};