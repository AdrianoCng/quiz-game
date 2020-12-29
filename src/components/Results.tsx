import React from "react";

type Props = {
    score: number;
    resetTrivia: () => void;
};

const Results: React.FC<Props> = ({ score, resetTrivia }) => {
    return (
        <div>
            <h1>Score</h1>
            <h2>{score}</h2>
            <button onClick={resetTrivia}>Try Again</button>
        </div>
    );
};

export default Results;
