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
        margin: 1rem;
    }

    form {
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 90%;
        width: 400px;
        background-color: ${(props) => props.theme.background2};

        .title {
            border-radius: 2rem 2rem 0 0;
            width: 100%;
            padding: 2rem;
            background-color: ${(props) => props.theme.specialColor};
            color: ${(props) => props.theme.white};
        }
        .inputs {
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        .isMember {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 0.5rem;
            font-size: 1.2rem;
            font-weight: 500;
            padding-bottom: 1rem;
            color: ${(props) => props.theme.color};

            span {
                color: ${(props) => props.theme.color};
                border-bottom: ${(props) => props.theme.specialColor} 2px solid;

                cursor: pointer;
            }
        }
        .form-row {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            .form-label {
                align-self: flex-start;
            }
            .form-input {
                padding-top: 0.3rem;
                border: none;
                width: 100%;
                border-bottom: 2px solid ${(props) => props.theme.specialColor};
                background-color: ${(props) => props.theme.background2};
                color: ${(props) => props.theme.color};
                font-size: 1.3rem;
                font-weight: 500;
                outline: none;
            }
        }
        .submitButton {
            width: 100%;
            padding: 1rem;
            border-radius: 0 0 2rem 2rem;
            background-color: ${(props) => props.theme.specialColor};
            color: ${(props) => props.theme.white};
            font-size: 1.3rem;
            font-weight: 500;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
`;
