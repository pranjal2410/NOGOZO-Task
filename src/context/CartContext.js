import React from "react";

export const CartContext = React.createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = React.useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    }

    const removeItem = (id) => {
        const items = cart.filter(item => {return item.id !== id})
        setCart(items);
    }

    return (
        <CartContext.Provider value={{ cart: cart, setCart: setCart, addItem: addItem, removeItem: removeItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;