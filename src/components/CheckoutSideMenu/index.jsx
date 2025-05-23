import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import "./styles.css";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    
    
    return (
        <aside className={ `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } Checkout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium">My Order</h2>
                <div>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeCheckoutSideMenu()} />
                </div>                
            </div>
           
        </aside>
    )
}

export default CheckoutSideMenu; 

