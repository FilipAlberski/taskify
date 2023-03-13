import {
    setHideAlert,
    setShowAlert,
    REGISTER_USER_BEGIN,
    setUser,
    setToken,
    setLoading,
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

export const test = () => async (dispatch) => {
    try {
        const response = await axios.get("/api/apitest");
        setAlertWithTimeout(dispatch, response.data.message, "success");
        console.log(response.data.message);
    } catch (err) {
        console.log(err);
    }
};
const REGISTER_USER_SUCCESS = (user, token) => async (dispatch) => {
    dispatch(setUser(user));
    dispatch(setToken(token));
    dispatch(
        setShowAlert({
            text: "User registered successfully, redirecting",
            type: "success",
        })
    );

    setTimeout(() => {
        dispatch(setHideAlert());
    }, 10000);
};
const REGISTER_USER_ERROR = (errorMsg) => async (dispatch) => {
    dispatch(setLoading(false));
    dispatch(setShowAlert({ text: errorMsg, type: "error" }));

    setTimeout(() => {
        dispatch(setHideAlert());
    }, 5000);
};
//register user

export const registerUser = (currnetUser) => async (dispatch) => {
    dispatch(REGISTER_USER_BEGIN());
    try {
        const response = await axios.post("/api/auth/register", currnetUser);
        const { user, token } = response.data;
        dispatch(REGISTER_USER_SUCCESS(user, token));

        //localstorage later
    } catch (err) {
        dispatch(REGISTER_USER_ERROR(err.response.data.msg));
    }
    //clear alert
};
