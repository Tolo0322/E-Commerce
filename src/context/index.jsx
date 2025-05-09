import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";



export const ShoppingCartProvider = ({children}) => {
    //Shopping cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail= () => setIsProductDetailOpen(false);

    //Product Detail -  Show Product
    const [productToShow, setProductToShow] = useState({});


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
