import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
  console.log(props);
    const { name , img , price , seller , stock ,ratings}=props.product ;
    return (
        <div className="product">
            <img src={img} alt="" />
          <div>
          <h2 className="product-name">{name}</h2>
            <h5><small>Sells by {seller}</small></h5>
            <h5>Price : {price}TK.</h5>
            <p><small> Only {stock} left in the stock . Order soon......</small></p>
            <Rating emptySymbol="fa fa-star-o fa-2x icon" 
  fullSymbol="fa fa-star fa-2x"   initialRating={ratings}
  readonly>
              
              </Rating> <br />
            <button className="btn-regular" onClick={()=> props.handleAddToCart(props.product) }> <FontAwesomeIcon icon={faShoppingCart}/>    Add to cart </button>
          </div>
        </div>
    );
};

export default Product;