import styled from "styled-components";

export const DashboardMainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme.background};
`;
