import React from "react";
import { StyledLogoutButton } from "./LogoutButton.styled.js";
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        history("/");
    };

    return <StyledLogoutButton>Logout</StyledLogoutButton>;
};

export default LogoutButton;
