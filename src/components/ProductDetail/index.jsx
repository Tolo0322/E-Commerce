import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import "./styles.css";

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    
    
    return (
        <aside className={ `${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium">Detail</h2>
                <div>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeProductDetail()} />
                </div>                
            </div>
            <figure className='px-6 flex justify-center items-center'>
                    <img
                        className='w-3/7  rounded-lg' 
                        src={context.productToShow.image} 
                        alt="context.productToShow.title" />
            </figure>
            <p className='flex flex-col p-6' >
            <span className='font-medium text-2xl mb-2'>{context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail; 
