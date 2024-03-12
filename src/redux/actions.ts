export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const ADD_TICKET_TO_CART = 'ADD_TICKET_TO_CART';
export const REMOVE_TICKET_FROM_CART = 'REMOVE_TICKET_FROM_CART';
export type CartActionTypes = AddTicketToCartAction | RemoveTicketFromCartAction;

interface AddTicketToCartAction {
    type: typeof ADD_TICKET_TO_CART;
    payload: ITicket;
  }
  
  interface RemoveTicketFromCartAction {
    type: typeof REMOVE_TICKET_FROM_CART;
    payload: string; // id do item
  }

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const logout = () => ({
    type: LOGOUT,
});


export const addTicketToCart = (ticket: ITicket): CartActionTypes => ({
    type: ADD_TICKET_TO_CART,
    payload: ticket,
  });
  
  export const removeTicketFromCart = (ticketId: string): CartActionTypes => ({
    type: REMOVE_TICKET_FROM_CART,
    payload: ticketId,
  });