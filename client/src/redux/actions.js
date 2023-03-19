import {
    setHideAlert,
    setShowAlert,
    REGISTER_USER_BEGIN,
    setUser,
    setToken,
    setLoading,
} from "./slices/appSlice";
import {
    addUserToLocalStorage,
    removeUserFromLocalStorage,
} from "./utils/userLocalStorage";
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

const LOGIN_USER_BEGIN = () => async (dispatch) => {
    dispatch(setLoading(true));
};

const LOGIN_USER_SUCCESS = (user, token) => async (dispatch) => {
    dispatch(setUser(user));
    dispatch(setToken(token));
    dispatch(
        setShowAlert({
            text: "User logged in successfully, redirecting",
            type: "success",
        })
    );

    setTimeout(() => {
        dispatch(setHideAlert());
    }, 10000);
};
const LOGIN_USER_ERROR = (errorMsg) => async (dispatch) => {
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

        //add user to local storage
        dispatch(addUserToLocalStorage(user, token));
        dispatch(REGISTER_USER_SUCCESS(user, token));
    } catch (err) {
        dispatch(REGISTER_USER_ERROR(err.response.data.msg));
    }
    //clear alert
};

export const loginUser = (currnetUser) => async (dispatch) => {
    dispatch(LOGIN_USER_BEGIN());

    try {
        const response = await axios.post("/api/auth/login", currnetUser);
        const { user, token } = response.data;

        dispatch(addUserToLocalStorage(user, token));
        dispatch(LOGIN_USER_SUCCESS(user, token));
    } catch (error) {
        dispatch(LOGIN_USER_ERROR(error.response.data.msg));
    }
};
