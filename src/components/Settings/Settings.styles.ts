import styled from "styled-components";

export const SettingsStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: auto;

    label {
        margin-right: 15px;
    }

    select {
        border: none;
        margin-bottom: 15px;
    }

    select:focus {
        outline: 0;
    }

    .btn-group {
        margin-bottom: 15px;
    }
`;
