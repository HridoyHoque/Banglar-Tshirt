import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData()
   const [cart , setCart] = useState([])


    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
           
            toast.warn('🦄 "You have already added"!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
       else{
        const newCart = [...cart , tshirt]
        setCart(newCart);
       }
    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining);
    }
    return (
        <div>
           <div className="home-container">
           <div className="T-shirt-container">
           {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           <div className="cart-container">
           <Cart cart={cart}
           handleRemoveFromCart={handleRemoveFromCart}
           ></Cart>
           </div>
           </div>
        </div>
    );
};

export default Home;