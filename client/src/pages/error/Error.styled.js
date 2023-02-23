import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color3);
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 800px) {
        padding: 5px;
    }

    @media screen and (max-width: 500px) {
        padding: 2px;
    }
`;

export const ImageContainer = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ErrorImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 600px;
`;

export const ErrorText = styled.h1`
    color: var(--font-color);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    transition: font-size 0.4s ease-in-out;

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        transition: font-size 0.4s ease-in-out;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
        transition: font-size 0.4s ease-in-out;
    }
`;
