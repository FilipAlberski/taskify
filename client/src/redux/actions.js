import { setHideAlert, setShowAlert } from "./slices/appSlice";

export const setAlertWithTimeout = (dispatch, text, type, timeout) => {
    dispatch(setShowAlert({ text, type }));
    setTimeout(() => {
        dispatch(setHideAlert());
    }, timeout || 5000);
};

export const stopAlert = () => {
    dispatch(setHideAlert());
};

export const registerUser2 = (user) => async (dispatch) => {
    try {
        const res = await axios.post("/api/users", user);
        dispatch(setAlertWithTimeout(dispatch, res.data.msg, "success", 5000));
    } catch (err) {
        dispatch(
            setAlertWithTimeout(dispatch, err.response.data.msg, "error", 5000)
        );
    }
};
