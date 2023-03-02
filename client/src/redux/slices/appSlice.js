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
        theme: "light",
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setAlert: (state, action) => {
            //show alert for 5 seconds
            state.showAlert = true;
            state.alertText = action.payload.text;
            state.alertType = action.payload.type;
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
    },
});

export const { setLoading, setAlert, setUser, setToken, setTheme } =
    appSlice.actions;

export default appSlice.reducer;
