import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import Sidebar from "../../components/sidebar/Sidebar";

import { StyledLayout } from "./SharedLayout.styled";
const SharedLayout = () => {
    return (
        <StyledLayout className="layout">
            <Navbar />
            <main className="dashboard">
                <Sidebar />

                <div className="outlet">
                    <Outlet />
                </div>
            </main>
        </StyledLayout>
    );
};

export default SharedLayout;
