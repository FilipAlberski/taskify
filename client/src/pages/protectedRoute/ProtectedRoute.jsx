import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const appSlice = useSelector((state) => state.app);

    const { user } = appSlice;

    const navigate = useNavigate();

    if (!user) {
        setTimeout(() => {
            navigate("/register");
        }, 1000);
    }

    return children;
};

export default ProtectedRoute;
