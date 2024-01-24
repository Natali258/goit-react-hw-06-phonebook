import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const selectName = state => state.form.name;
export const selectNumber = state => state.form.number;
export const formReducer = formSlice.reducer;
export const { changeName, changeNumber } = formSlice.actions;
