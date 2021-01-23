import React from "react";

export const CategoryContext = React.createContext();

const CategoryContextProvider = (props) => {
    const [category, setCategory] = React.useState('');

    return (
        <CategoryContext.Provider value={{ category: category, setCategory: setCategory }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;