import styled from "styled-components";

export const TaskFilterWrapper = styled.div`
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .form-row {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;
        }
    }
`;
