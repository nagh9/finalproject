import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/userSlice';
import cartReducer from '../slices/cartSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;