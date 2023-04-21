import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const appSlice = useSelector((state) => state.app);

    const navigate = useNavigate();
    return (
        <NavbarContainer>
            <div className="leftSide">
                <Logo />
                <p>Dasboards</p>
                {appSlice.user &&
                    appSlice.user.roles.includes("superAdmin") && <p>admin</p>}
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
