import { Button } from "react-bootstrap";
import styled from "styled-components";

export const QuestionCardStyles = styled.div`
    width: 100%;
    overflow: auto;

    .score {
        font-size: 1.2em;
    }

    .stats {
        display: flex;
        justify-content: space-between;
    }

    .question {
        font-style: italic;
        margin: 0 10px 30px;
        text-align: justify;
    }

    @media only screen and (max-width: 320px) {
        .stats {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const QuestionButton = styled(Button)`
    background-image: ${({ variant }) =>
        variant === "success"
            ? "linear-gradient(160deg, rgba(31,238,34,1) 0%, rgba(1,94,15,1) 100%)"
            : variant === "danger"
            ? "linear-gradient(160deg, rgba(223,86,0,1) 61%, rgba(147,47,0,1) 100%)"
            : "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)"};
`;
