import {
    setHideAlert,
    setShowAlert,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
} from "./slices/appSlice";
import axios from "axios";

export const setAlertWithTimeout = (dispatch, text, type, timeout) => {
    dispatch(setShowAlert({ text, type }));
    setTimeout(() => {
        dispatch(setHideAlert());
    }, timeout || 5000);
};

export const stopAlert = () => {
    dispatch(setHideAlert());
};

//register user

export const register =
    ({ name, email, password }) =>
    async (dispatch) => {
        dispatch(REGISTER_USER_BEGIN());

        try {
            const response = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
            });
            dispatch(REGISTER_USER_SUCCESS());
        } catch (err) {}
    };
