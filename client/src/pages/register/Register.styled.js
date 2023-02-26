import styled from "styled-components";

export const RegisterContainer = styled.section`
    background-color: var(--primary-color-light);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        justify-self: center;
        max-width: 500px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        border-radius: var(--borderRadius);
        box-shadow: var(--shadow-1);
        background-color: var(--primary-color);
        margin: 2rem;

        @media screen and (max-width: 768px) {
            padding: 1rem;
            margin: 1rem;
        }
        .alreadyRegistered {
            margin-top: 1rem;
            a {
                color: var(--secondary-color);
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .form-btn {
            width: 100%;
            padding: 0.5rem;
            border: none;
            border-radius: var(--borderRadius);
            background-color: var(--secondary-color);
            color: var(--primary-color);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: var(--secondary-color-dark);
            }
        }

        .form-row {
            width: 100%;
            max-width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 1rem;

            margin-bottom: 1rem;
            input {
                width: 95%;
                padding: 0.5rem;
                border: 1px solid var(--secondary-color);
                border-radius: var(--borderRadius);
                outline: none;
                font-size: 1rem;
            }
            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }
    }
`;
