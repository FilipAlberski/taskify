import { createSlice } from '@reduxjs/toolkit';

//local storage

const getLocalStorageTheme = () => {
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const initialState = {
  theme: getLocalStorageTheme() || 'light',
  isSidebarOpen: false,
  isModalOpen: false,
  modalContent: '',
  isNotificationOpen: false,
  notificationContent: '',
  notificationType: '',
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
