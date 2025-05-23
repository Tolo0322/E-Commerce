import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";



export const ShoppingCartProvider = ({children}) => {
    //Shopping cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail= () => setIsProductDetailOpen(false);

    //Checkout-side-menu - Open Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(false);

    //Product Detail -  Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart - Add products to card 
    const [cartProducts, setCartProducts] = useState([]);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
