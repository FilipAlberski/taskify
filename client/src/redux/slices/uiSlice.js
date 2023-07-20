import { createSlice } from '@reduxjs/toolkit';

//local storage

const getLocalStorageTheme = () => {};

const initialState = {
  theme: getLocalStorageTheme() || 'dark',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
