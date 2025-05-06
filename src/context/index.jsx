import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";



export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
