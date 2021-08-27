/* eslint-disable @typescript-eslint/no-redeclare */
import {
  ADD_ITEM_TO_CART,
  AllActions,
  Country,
  REMOVE_FROM_CART,
} from "../../types";

type InitState = {
  cart: Country[] | any | Country;
};

const initState: InitState = {
  cart: [],
};

const cartReducer = (state = initState, action: AllActions): InitState => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
      

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
