import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
import Subtotal from './Subtotal';

function Checkout() {
    
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" 
               src="https://d1e00ek4ebabms.cloudfront.net/production/8c37a9c8-922f-4778-a28d-67fcb10f470f.jpg"
               alt=""/
            >
            {basket?.length===0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* bunch of products */}
                    {basket?.map(item=>{  
                        return(
                        <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                        />
                        )
                    })}
                    
                </div>
            )}    
            </div>
            {basket.length>0 && (
            <div className="checkout__right">
                <Subtotal/>
            </div>
            )}
            
        </div>
    )
}

export default Checkout
