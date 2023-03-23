import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: blue;
    width: ${({ sidebarWidth }) => sidebarWidth}px;
    min-width: 60px;
    max-width: 300px;
    position: relative;

    .sidebar {
        height: 100%;
    }

    .sidebar-resizer {
        position: absolute;
        right: 0;
        top: 0;
        width: 10px;
        height: 100%;
        cursor: col-resize;
        background-color: white;
        opacity: 0.2;
        z-index: 1;
    }

    .sidebar-resizer:hover {
        opacity: 0.4;
    }

    .sidebar-resizer:active {
        opacity: 0.6;
    }

    .sidebar-resizer:after {
        content: "";
        position: absolute;
        right: -5px;
        top: 0;
        width: 10px;
        height: 100%;
        cursor: col-resize;
        z-index: 2;
    }

    .sidebar-resizer:hover:after {
        background-color: #ddd;
    }

    .sidebar-resizer:active:after {
        background-color: #bbb;
    }
`;
