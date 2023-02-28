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
            //show alert for 5 seconds
            state.showAlert = true;
            state.alertText = action.payload.text;
            state.alertType = action.payload.type;
            setTimeout(() => {
                state.showAlert = false;
                state.alertText = "";
                state.alertType = "";
            }, 5000);
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
