import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
    deleteCar: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    }
  }
});

export const { addCar, deleteCar } = carSlice.actions;
export default carSlice.reducer;
