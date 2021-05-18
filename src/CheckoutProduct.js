import React from 'react'
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,title,image,price,rating}) {

    const[{basket},dispatch]=useStateValue();


    const removefromBaseket = () =>{
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="cp">
            <img className="cp__image" src={image} alt=""/>
            <div className="cp__info">
                <p className="cp__title">{title}</p>
                <p className="cp__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                 {
                   Array(rating)
                   .fill()
                   .map((_)=> (
                       <p><StarIcon style={{ color: "orange" }}/></p>
                   ))
                 }
               </div>
               <button onClick={removefromBaseket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct