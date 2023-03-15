import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        showAlert: false,
        alertText: "",
        alertType: "",
        user: user || null,
        token: token || null,
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
        //dispatch(REGISTER_USER_SUCCESS({ user, token }));
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
