import styled from "styled-components";

export const StyledLogoutButton = styled.button`
    background-color: ${(props) => props.theme.specialColor};
    color: ${(props) => props.theme.color};
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.disabledColor};
    }
`;
