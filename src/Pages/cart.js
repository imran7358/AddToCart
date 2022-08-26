import React, { useEffect, useState } from "react";

const Cart =({state, dispatch})=>{
    const {cart, paroducts} = state;
    const [total, setTotal] = useState(0)
    const onChangeQty =(id, qty)=>{
        dispatch({
            type: "CHNAGE_QTY",
            payload:{
                id,
                qty
            }
        })
    }

    useEffect(()=>{

      setTotal(cart.reduce((accu, item)=> accu + Number(item.price) * item.qty,0))
       
    },[cart])
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
                      <div className="cart-prod-con">
                      <div className="cart-prod"> 
                      <img src={prod.thumbnail} alt={prod.title}/>
                      </div>
                      <div className="cart-prod-info">
                      <label>{prod.title}</label>
                      <span>$ {prod.price}</span>
                      </div>
                      <div className="qnty-conty">
                      <button onClick={()=> onChangeQty(prod.id, prod.qty - 1)}>-</button>
                      <span>{prod.qty}</span>
                      <button onClick={()=> onChangeQty(prod.id, prod.qty + 1)}>+</button>
                      </div>
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

