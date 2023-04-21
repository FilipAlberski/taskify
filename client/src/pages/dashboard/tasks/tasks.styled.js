import styled from "styled-components";

export const TasksContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    // status, key, title, priority, created at, updated at

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    padding: 0.5rem;

    background-color: ${(props) => props.theme.background};

    .tasks {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: ${(props) => props.theme.background};
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0.1rem ${(props) => props.theme.shadow};
    }
`;
