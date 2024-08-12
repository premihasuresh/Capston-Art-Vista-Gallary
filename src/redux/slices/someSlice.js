// src/redux/slices/someSlice.js
import { createSlice } from '@reduxjs/toolkit';

const someSlice = createSlice({
  name: 'some',
  initialState: {},
  reducers: {
    someAction: (state) => {
      // Your action logic here
    }
  }
});

export const { someAction } = someSlice.actions;
export default someSlice.reducer;