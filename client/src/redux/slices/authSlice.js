import { createSlice } from '@reduxjs/toolkit';
import {
  forgotPassword,
  registerUser,
  userLogin,
  resetPassword,
} from '../actions/authActions';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const userInfo = localStorage.getItem('userInfo');

const initialState = {
  loading: false,
  userInfo: userInfo ? JSON.parse(userInfo) : null,
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken'); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    clearAlert: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
        state.userInfo = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
        state.userInfo = payload;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
        state.userInfo = payload;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout, setCredentials, clearAlert } =
  authSlice.actions;

export default authSlice.reducer;
