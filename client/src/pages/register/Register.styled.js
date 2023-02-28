import styled from "styled-components";

export const RegisterContainer = styled.div`
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        margin: 1rem;
    }

    .form-wrapper {
        max-width: 90%;
        margin: 1rem;
        width: 400px;
        background-color: var(--primary-color);
        border-radius: var(--borderRadius);
        .title {
            line-height: 80px;
            background-color: var(--background-color-darker);
            border-radius: 0.4rem 0.4rem 0 0;
            padding-left: 30px;
            font-size: 25px;
            font-weight: 600;
            color: #fff;
        }
    }
`;
