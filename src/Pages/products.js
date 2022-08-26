import React from "react";
import '../App.css'

const Products =({state, dispatch})=>{
    const {cart, products} = state
 return(
  <>
 <div className="prod-list">

 {
    products.map((prod,i)=>
    <div key ={i} className="prod-list-inn">
        <img src={prod.thumbnail} alt ={prod.title}/>
        <div className="prod-name flex-flow spc-btwn">
        <h3>{prod?.title}</h3>
        <span>$ {prod.price}</span>
        </div>
        <div className="btn-container">
            {
                cart.some((p)=>p.id === prod.id) ?
                <button className="remove-cart" onClick={()=>
                    dispatch({
                        type: "REMOVE_CART",
                        payload: prod
                    })
                }>Remove To Cart</button> 
                :
                <button className="add-cart" onClick={()=>
                    dispatch({
                        type: "ADD_CART",
                        payload: {
                            id: prod.id,
                            title: prod.title,
                            thumbnail:prod.thumbnail,
                            price:prod.price,
                            qty:1
                        },
                    })
            }>Add To Cart</button>

            }
       
        
        </div>
    </div>
    )
  }
 </div>
  </>
)


}

export default Products