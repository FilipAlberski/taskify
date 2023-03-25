import styled from "styled-components";

export const StyledLayout = styled.div`
    color: ${(props) => props.theme.color};
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .dashboard {
        flex: 1;
        display: flex;

        .sidebar {
            width: 55px;
        }

        .outlet {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }
`;
