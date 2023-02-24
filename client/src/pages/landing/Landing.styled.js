import styled from "styled-components";

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
    background: var(--primary-color3);

    color: var(--font-color);

    .topPart {
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 1.75rem;
    }
    .bottomPart {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 1.75rem;
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 1.75rem;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
`;
