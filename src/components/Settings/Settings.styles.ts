import styled from "styled-components";

export const SettingsStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5px;

    label {
        margin-right: 1rem;
    }

    select {
        padding-top: 5px;
        border: none;
    }

    select:focus {
        outline: 0;
    }

    .btn-group {
        margin-bottom: 1rem;
    }
`;
