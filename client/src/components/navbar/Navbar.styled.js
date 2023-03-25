import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 55px;
    background-color: red;
    width: 100%;
    background-color: ${(props) => props.theme.background2};
`;
