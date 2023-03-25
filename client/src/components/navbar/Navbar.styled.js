import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 55px;

    width: 100%;
    background-color: ${(props) => props.theme.background2};
    border-bottom: 1.5px ${(props) => props.theme.specialColor} solid;
`;
