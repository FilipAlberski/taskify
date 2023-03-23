import React, { useState } from "react";
import { SidebarContainer } from "./Sidebar.styled";

const SmallSidebar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(100);

    const handleResize = (event) => {
        setSidebarWidth(event.clientX);
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
