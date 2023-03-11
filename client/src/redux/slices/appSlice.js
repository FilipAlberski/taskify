import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        showAlert: false,
        alertText: "",
        alertType: "",
        user: null,
        token: null,
        theme: "light",
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setShowAlert: (state, action) => {
            state.showAlert = true;
            state.alertText = action.payload.text;
            state.alertType = action.payload.type;
        },
        setHideAlert: (state, action) => {
            state.showAlert = false;
            state.alertText = "";
            state.alertType = "";
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        REGISTER_USER_BEGIN: (state, action) => {
            state.isLoading = true;
        },
        REGISTER_USER_SUCCESS: (state, action) => {
            state.isLoading = false;
        },
    },
});

export const {
    setLoading,
    setUser,
    setToken,
    setTheme,
    setHideAlert,
    setShowAlert,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
} = appSlice.actions;

export default appSlice.reducer;
