import React from "react";
import { StyledLogoutButton } from "./LogoutButton.styled.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await axios.get("/api/auth/logout");
            console.log(response);
            navigate("/register");
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
