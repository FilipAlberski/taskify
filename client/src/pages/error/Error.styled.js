import styled from "styled-components";

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: var(--primary-color4);
    background: var(--primary-color1);
    nav {
        padding: 1rem;
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    .main-img {
        display: none;
    }
    .img {
        width: 100%;

        object-fit: cover;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;
