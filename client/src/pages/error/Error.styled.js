import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    nav {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
    }
    .content {
        display: grid;
        grid-template-columns: 500px 1fr;
        grid-gap: 2rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;

        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .leftText {
                text-align: center;
            }

            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            p {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }
        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
                max-width: 500px;
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .left {
                text-align: center;
            }
            .right {
                img {
                    width: 100%;
                }
            }
        }
    }
`;
