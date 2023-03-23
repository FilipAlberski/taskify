import React, { useState } from "react";
import { SidebarContainer } from "./Sidebar.styled";
import { useSelector, useDispatch } from "react-redux";
import { SET_SIDEBAR_WIDTH } from "../../redux/slices/appSlice";

const SmallSidebar = () => {
    const dispatch = useDispatch();
    const sidebarWidth = useSelector(
        (state) => state.app.pageSettings.sidebarWidth
    );

    const handleResize = (event) => {
        dispatch(SET_SIDEBAR_WIDTH(event.clientX));
        //setSidebarWidth(event.clientX);
    };

    return (
        <SidebarContainer sidebarWidth={sidebarWidth}>
            <div className="sidebar">sidebaree</div>
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
