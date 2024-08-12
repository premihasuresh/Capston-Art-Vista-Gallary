import { combineReducers } from 'redux';
import cartReducer from '../cartSlice'; // Adjust the path based on your structure

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;