import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        showAlert: false,
        alertText: "",
        alertType: "",
        user: null,
        token: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setAlert: (state, action) => {
            state.showAlert = action.payload.showAlert;
            state.alertText = action.payload.alertText;
            state.alertType = action.payload.alertType;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setLoading, setAlert, setUser, setToken } = appSlice.actions;

export default appSlice.reducer;
