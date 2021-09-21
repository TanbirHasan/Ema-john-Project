import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
 

    let total =0;
    for(let i=0;i<cart.length;i++){
        let product = cart[i];
        total = product.price;
    }

    var shipping = 0;

    if(total > 15){
        shipping = 4.99;
    }
    else if(total >0){
        shipping = 12.99
    }
    else if(total > 35){
        shipping =12.99
    }
       
    
 
    return (
        <div>
            <h3>This is Cart</h3>
            <h3>Item Ordered:{cart.length}</h3>
            <h3>Product Price: {total}</h3>
            <p><small>Shipping Cost: {shipping}</small></p>
            <h3>Total Price: {Math.round(total + shipping)/10}</h3>
           
        </div>
    );
};

export default Cart;