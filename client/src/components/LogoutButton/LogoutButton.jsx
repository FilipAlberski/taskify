import React from "react";
import { StyledLogoutButton } from "./LogoutButton.styled.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        try {
            axios.get("/api/auth/logout");
            navigate("/landing");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
    );
};

export default LogoutButton;
