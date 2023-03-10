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
    transition: all 0.5s ease;
    //shadow
    .title {
        padding-bottom: 1rem;
    }
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
        padding: 2rem 2rem 1rem 2rem;
        background-color: ${(props) => props.theme.background2};
        box-shadow: ${(props) => props.theme.bigShadow};
        border-radius: 1rem;

        .submitButton {
            width: 100%;
            padding: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            background-color: ${(props) => props.theme.specialColor};
            color: ${(props) => props.theme.white};
            font-size: 1.2rem;
            margin-bottom: 1rem;
            cursor: pointer;
        }
        //disabled button

        .submitButton:disabled {
            background-color: ${(props) => props.theme.disabledColor};
            cursor: not-allowed;
        }

        .isMember {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            justify-content: center;
            width: 100%;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: ${(props) => props.theme.color};
            .registerSpan {
                color: ${(props) => props.theme.specialColor};
            }
            .forgotSpan {
                color: ${(props) => props.theme.specialColor};
            }
        }
    }

    .inputs {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-bottom: 1rem;

        .form-row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 100%;

            label {
                font-size: 1rem;
                margin-bottom: 0.2rem;
            }
            input {
                width: 100%;
                padding: 0.5rem;
                border: none;
                border-radius: 0.5rem;
                background-color: ${(props) => props.theme.background3};
                color: ${(props) => props.theme.color};
                font-size: 1rem;
                margin-bottom: 0.6rem;
            }
        }
    }
`;
