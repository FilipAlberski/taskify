import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/uiSlice';
import authSlice from './slices/authSlice';
import { authApi } from '../services/authService';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
