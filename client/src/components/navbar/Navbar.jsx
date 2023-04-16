import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <NavbarContainer>
            <div className="leftSide">
                <Logo />
            </div>
            <div className="rightSide">
                <p>
                    Search <input></input>
                </p>
                <p>profile</p>
                <LogoutButton />
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
