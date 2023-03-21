import React from "react";
import { Outlet, Link } from "react-router-dom";

import { StyledLayout } from "./SharedLayout.styled";
const SharedLayout = () => {
    return (
        <StyledLayout>
            <nav>
                <Link to="/dashboard/stats">Stats</Link>
                <Link to="/dashboard/profile">Profile</Link>
                <Link to="/dashboard">Tasks</Link>
                <Link to="/dashboard/createTask">Create Task</Link>
            </nav>
            <Outlet />
        </StyledLayout>
    );
};

export default SharedLayout;
