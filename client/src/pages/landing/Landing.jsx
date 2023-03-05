import Logo from "../../components/Logo/Logo";
import { LandingContainer } from "./Landing.styled";
import { useSelector } from "react-redux";
import { useState } from "react";

import landingDark from "../../assets/landing/landingDark.svg";
import landingLight from "../../assets/landing/landingLight.svg";

const Landing = () => {
    //redux info about theme

    const theme = useSelector((state) => state.app.theme);

    return (
        <LandingContainer>
            <nav>
                <Logo />
            </nav>

            <div className="content">
                <div className="left">
                    <div className="leftText">
                        <h1>Fast and easy</h1>
                        <p>
                            Taskify is a simple and easy to use task manager. It
                            allows you to create, edit, and delete tasks. It
                            also allows you to create, edit, and delete
                            categories.
                        </p>
                    </div>
                </div>
                <div className="right">
                    {theme === "dark" ? (
                        <img src={landingDark} alt="landing" />
                    ) : (
                        <img src={landingLight} alt="landing" />
                    )}
                </div>
            </div>
        </LandingContainer>
    );
};

export default Landing;
