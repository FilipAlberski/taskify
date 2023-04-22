import React, { useState, useEffect } from "react";
import { SidebarContainer } from "./Sidebar.styled";
import { useSelector, useDispatch } from "react-redux";
import { SET_SIDEBAR_WIDTH } from "../../redux/slices/appSlice";
import { useNavigate } from "react-router-dom";

const SmallSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sidebarWidth = useSelector(
        (state) => state.app.pageSettings.sidebarWidth
    );

    const handleResize = (event) => {
        dispatch(SET_SIDEBAR_WIDTH(event.clientX));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("sidebar width: ", sidebarWidth);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [handleResize]);

    //use effecto to get dashboards from db

    return (
        <SidebarContainer sidebarWidth={sidebarWidth}>
            <h4>Dashboards</h4>
            <ul>
                <li
                    onClick={() => {
                        navigate("/dashboard");
                    }}
                >
                    Assigned to you
                </li>
            </ul>

            <div
                className="sidebar-resizer"
                onMouseDown={() => {
                    document.addEventListener("mousemove", handleResize);
                    document.addEventListener("mouseup", () =>
                        document.removeEventListener("mousemove", handleResize)
                    );
                }}
            ></div>
        </SidebarContainer>
    );
};

export default SmallSidebar;
