import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {

    const {name, img,seller,stock,price} = props.product;

    return (
        <div className="Product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="Product-description">
               <h3 className="product-name">{name}</h3>
               <h4>by: {seller}</h4>
               <h3>{price}</h3>
               <h3>{stock} is left. Order Soon</h3>
            <button className="bg-primary" onClick={() =>props.handleclick(props.product) }><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        
        </div>
    );
};

export default Product;