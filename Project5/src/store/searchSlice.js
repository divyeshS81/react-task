import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => action.payload
  }
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
