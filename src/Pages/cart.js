import React, { useState } from "react";

const Cart =({state, dispatch})=>{
    const {cart, paroducts} = state;
    const [total, setTotal] = useState(0)
    return (
        <>
      <div className="cart-container">
        <h2 className="cart-heading">Cart Info</h2>
        <p>Total : {total}</p>

        {
            cart.length > 0 ? 
            <div>
                {
                    cart.map((prod, i)=>
                        <div className="cart-prod"> 
                        <img src={prod.thumbnail} alt={prod.title}/>
                        </div>
                    
                    )
                }
            </div>
            : 
            
            <p>Your cart is empty</p>
        }
      </div>
        </>
    )
}

export default Cart

