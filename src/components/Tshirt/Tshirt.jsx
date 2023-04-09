import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt , handleAddToCart}) => {
    const {picture , name ,gender , price} = tshirt;
    return (
        <div className='T-shirt'>
           <div>
           <img src={picture} alt="" /> 
           <h3>{name}</h3>
           <p>price: ${price}</p>
           <button onClick={() => handleAddToCart (tshirt)} className='btn-phurchase'>Buy Now</button>
           </div>
        </div>
    );
};

export default Tshirt;