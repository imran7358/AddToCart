export const cartReducer =(state, action)=>{

    switch (action.type) {
        case "ADD_PRODUCTS" :
            return {...state, products: action.payload}

            case "ADD_CART":
                return{...state, cart:[{...action.payload},...state.cart]}

                case  "REMOVE_CART":
                    return {
                        ...state,
                       
                        cart: state.cart.filter((p)=> p.id !== action.payload.id),
                    };
    
        default:
            break;
    }
}