import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers if any
  },
});

export default store;