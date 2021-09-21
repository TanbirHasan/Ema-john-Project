import React,{useState} from 'react';
import fakedata from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const frist10 = fakedata.slice(0,10);
    const [products, setproducts] = useState(frist10)   
    const [cart, setCart] = useState([]);
  


    const handleclick = (product) =>{

        console.log('Products added',product)
       
        const newCart = [...cart,product];
        setCart(newCart);
    }
 
   
    
    return (
        <div className="Shop-container">
          <div className="product-container">
             {
                products.map(pd => <Product
                     product={pd}
                     handleclick={handleclick}
                     >

                   

                     </Product>)
             }
          </div>
          <div className="cart-container">
             <Cart cart={cart}></Cart>
          </div>
    
          
        </div>
    );
};

export default Shop;