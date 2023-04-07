import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
const Navbar = () => {
    return (
        <NavbarContainer>
            <h4>Navbar</h4>
            <LogoutButton />
        </NavbarContainer>
    );
};

export default Navbar;
