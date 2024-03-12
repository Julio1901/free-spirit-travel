import { ADD_TICKET_TO_CART, CartActionTypes, REMOVE_TICKET_FROM_CART } from "./actions";

interface CartState {
    items: ITicket[];
  }
  
  const initialState: CartState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
      case ADD_TICKET_TO_CART:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case REMOVE_TICKET_FROM_CART:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;