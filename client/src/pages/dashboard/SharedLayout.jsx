import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BigSidebar from "../../components/bigSidebar/BigSidebar";
import SmallSidebar from "../../components/smallSidebar/SmallSidebar";

import { StyledLayout } from "./SharedLayout.styled";
const SharedLayout = () => {
    return (
        <StyledLayout>
            <Navbar />
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Outlet />
                </div>
            </main>
        </StyledLayout>
    );
};

export default SharedLayout;
