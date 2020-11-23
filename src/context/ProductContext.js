import React, { useState, createContext } from 'react';

export const ProductContext = createContext();
export const ProductProvider = props => {
    const [product, setProducts] = useState([
        {
            name: 'Wes',
            age: 100,
            cool: true
        }
    ]);
    return (
        <ProductContext.Provider value={[product,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
}
