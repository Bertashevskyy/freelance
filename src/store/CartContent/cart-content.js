import {createContext} from "react";

export const CartContent = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    deleteItem: (id) => {}
});