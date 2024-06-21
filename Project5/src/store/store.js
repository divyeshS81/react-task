import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
    searchTerm: searchReducer
  }
});

export default store;
