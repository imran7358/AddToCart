
import './App.css';
import React, { useEffect, useReducer} from 'react';
import { cartReducer } from './reducer/cartReducer';
import axios from 'axios'
import Products from './Pages/products';
import Cart from './Pages/cart';

function App() {

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  })
// console.log(state)
  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata = async() =>{
    const { data } = await axios.get('https://dummyjson.com/products')
    console.log(data)
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }
  return (
    <div className="App felx-container">
     <Products state = {state} dispatch ={dispatch}/>
     <Cart state = {state} dispatch = {dispatch}/>
     
    </div>
  );
}

export default App;
