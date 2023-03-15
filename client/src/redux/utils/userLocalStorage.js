export const addUserToLocalStorage = (user, token) => async (dispatch) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
};

export const removeUserFromLocalStorage = () => async (dispatch) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};
