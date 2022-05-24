import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =useState([]);
    const [cart ,setCart] = useState([]);
    const [display ,setDisplay] = useState([]);
    console.log(products);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data =>{ setProducts(data)
            setDisplay(data);
        
        }); 
    },[])
    useEffect( () => {
      if(products.length){
        const savedProducts =getStoredCart();
        const storedProducts = [];
        for(const id in savedProducts)
        {
            const addedProduct =products.find(product => product.id === id);
            if(addedProduct){
                const quantity = savedProducts[id];
                 addedProduct.quantity =quantity ;
                storedProducts.push(addedProduct);
                console.log(addedProduct);


            }
        }
        setCart(storedProducts);
      }
    },[products])
    const handleAddToCart = (product) =>{
        const newCart = [...cart , product]
        setCart(newCart);
        addToDb(product.id);
    }
    const handleChange = event =>{
        const searchText = event.target.value ;
        const matchedProduct = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplay(matchedProduct);
    }
    return (
        <>
        <div className="search-container">
            <input type="text" onChange={handleChange} placeholder="Search Product" />

        </div>
        <div className="shop-container">
            <div className="product-container">
                {
                    display.map(product =><Product product={product} key={product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </>
    );
};

export default Shop;