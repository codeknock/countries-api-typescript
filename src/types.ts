export type Country = {
  name: string;
  flag: string;
  population: number;
  borders: string[];
  languages: Languages[];

  region: string;
};

export type Languages = { name: string; nativeName: string };

//Fetching countries

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

//cart types
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export type AddItemToCartAction = {
  type: typeof ADD_ITEM_TO_CART
  payload: []
}
export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: []
}
 

//ALL actions

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES;
};
export type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: [];
};
export type FetchCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: string;
};

export type AllActions =
  | FetchCountriesAction
  | FetchCountriesSuccessAction
  | FetchCountriesFailureAction
  | AddItemToCartAction
  | RemoveFromCartAction
  
