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
    transition: all 0.3s ease;

    //shadow

    nav {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;

        width: 100%;
        display: flex;
        flex-direction: row;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 380px;
        max-width: 90%;
        padding: 2rem;
        background-color: ${(props) => props.theme.background2};
        box-shadow: ${(props) => props.theme.bigShadow};
        border-radius: 1rem;
    }
`;
