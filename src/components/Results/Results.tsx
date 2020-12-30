import React from "react";

// Styles
import { Button } from "../../App.styles";
import { ResultsStyles } from "./Results.styles";

type Props = {
    score: number;
    resetTrivia: () => void;
};

const Results: React.FC<Props> = ({ score, resetTrivia }) => {
    return (
        <ResultsStyles>
            <h1>Score</h1>
            <h2>{score}</h2>
            <Button onClick={resetTrivia}>Try Again</Button>
        </ResultsStyles>
    );
};

export default Results;
