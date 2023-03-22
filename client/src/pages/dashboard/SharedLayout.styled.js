import styled from "styled-components";

export const StyledLayout = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 55px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
        "navbar"
        "main";

    .dashboard {
        grid-area: main;
        display: grid;
        grid-template-columns: 55px 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "sidebar main";

        height: 100%;
    }
`;
