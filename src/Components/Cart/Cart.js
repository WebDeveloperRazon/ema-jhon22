import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0 ;
    let totalQuantity = 0 ;
     for(const product of cart) {
         if(!product.quantity){
             product.quantity =1 ;
         }
          total = total + product.price * product.quantity ;
          totalQuantity = totalQuantity + product.quantity ;
     }
    return (
        <div>
            <h3 style={{textAlign: 'center', fontWeight:'bold' , padding:'10px', paddingBottom:'20px', borderBottom: '1px solid black'}}> Order Summary</h3>
            <h4> Items Ordered : {totalQuantity}</h4>
            <h5 style={{paddingTop:'20px'}}>Total Price : {total} taka</h5>
        </div>
    );
};

export default Cart;