import React from "react";

// Utils
import { formatTime } from "../../Utils";

// Styles
import { Button } from "../../App.styles";
import { ResultsStyles } from "./Results.styles";

type Props = {
    score: number;
    timer: number;
    resetTrivia: () => void;
};

const Results: React.FC<Props> = ({ score, timer, resetTrivia }) => {
    return (
        <ResultsStyles>
            <h1>Score</h1>
            <h2>{score}</h2>
            <h3>{formatTime(timer)}</h3>
            <Button onClick={resetTrivia}>Try Again</Button>
        </ResultsStyles>
    );
};

export default Results;
