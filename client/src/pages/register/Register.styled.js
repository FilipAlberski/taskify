import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //shadow

    nav {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;

        width: 100%;
    }
`;
