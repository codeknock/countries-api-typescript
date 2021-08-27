import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import countryReducer from "./countryReducer";
const rootReducer = combineReducers({
  countryReducer,
  cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
