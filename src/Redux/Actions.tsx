import axios from "axios";

import { Dispatch } from "react";
import {
  ADD_ITEM_TO_CART,
  AllActions,
  Country,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  REMOVE_FROM_CART,
} from "../types";

const URL = "https://restcountries.com/v3.1/all";

export const fetchCountriesThunk =
  () => async (dispatch: Dispatch<AllActions>) => {
    try {
      dispatch({
        type: FETCH_COUNTRIES,
      });

      const { data } = await axios.get(URL);

      dispatch({
        type: FETCH_COUNTRIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COUNTRIES_FAILURE,
        payload: error,
      });
    }
  };

export const addItemsToCart = (item: Country[] | any): AllActions => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item: Country[] | any): AllActions => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
