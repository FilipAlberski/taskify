import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: ${(props) => props.theme.background};
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
        width: 1.5px;
        height: 100%;
        cursor: col-resize;
        background-color: ${(props) => props.theme.specialColor};
        opacity: 1;
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
        right: -2px;
        top: 0;
        width: 4px;
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
