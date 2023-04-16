import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 55px;

    width: 100%;
    background-color: ${(props) => props.theme.background2};
    border-bottom: 1.5px ${(props) => props.theme.specialColor} solid;
    .leftSide {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .rightSide {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
`;
