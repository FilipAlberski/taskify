import { createSlice } from '@reduxjs/toolkit';

const getLocalStorageTheme = () => {};

const initialState = {
  theme: getLocalStorageTheme() || 'dark',
  alert: {
    type: null,
    message: null,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setSuccessAlert(state, { payload }) {
      state.alert.type = 'success';
      state.alert.message = payload;
    },
    setErrorAlert(state, { payload }) {
      state.alert.type = 'error';
      state.alert.message = payload;
    },

    clearAlert(state) {
      state.alert.type = null;
      state.alert.message = null;
    },
  },
});

export const {
  toggleTheme,
  setSuccessAlert,
  setErrorAlert,
  clearAlert,
} = uiSlice.actions;

export default uiSlice.reducer;
