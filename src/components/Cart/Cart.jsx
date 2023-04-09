import React from 'react';

const Cart = ({cart , handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Add something</p>
    }
    return (
        <div>
            <h2> Order Summm: {cart.length}</h2>
            {cart.length < 2 ? <span>kinte thako Bhaii</span> : <span> Kotipotir polaaa</span>}
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}>
                    {tshirt.name}
                 <button onClick={() => handleRemoveFromCart(tshirt._id)}
                 >X</button></p>)
            }
            {
                cart.length === 3 && <p>Bahhh 3 ta kinba bhaii</p>
            }
        </div>
    );
};

export default Cart;