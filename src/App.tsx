import React, { useState } from "react";

// components
import Settings from "./components/Settings";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";

// Types
import { Difficulty, Category, Question } from "./Utils";

// Utils
import { fetchQuestions } from "./Utils";

function App() {
    const [difficulty, setDifficulty] = useState(Difficulty.EASY);
    const [category, setCategory] = useState(Category.GENERAL_KNOWLEDGE);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isStarted, setIsStarted] = useState(false);
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [userAnswered, setuserAnswered] = useState(false);

    const startTrivia = async () => {
        setIsStarted(true);
        const data = await fetchQuestions(difficulty, category);
        setQuestions(data);
    };

    const resetTrivia = () => {
        setDifficulty(Difficulty.EASY);
        setCategory(Category.GENERAL_KNOWLEDGE);
        setQuestions([]);
        setIsStarted(false);
        setNumber(0);
        setScore(0);
        setGameOver(false);
        setuserAnswered(false);
    };

    const checkAnswer = ({
        currentTarget,
    }: React.MouseEvent<HTMLButtonElement>) => {
        const { iscorrect } = currentTarget.dataset;

        setuserAnswered(true);

        if (iscorrect === "true") setScore((prev) => prev + 1);

        setTimeout(() => {
            if (number >= 9) {
                setGameOver(true);
                return;
            }
            setNumber((prev) => (prev < 9 ? prev + 1 : (prev = 9)));
            setuserAnswered(false);
        }, 1500);
    };

    return (
        <div className="container">
            <h1 className="text-center">Quiz Game</h1>
            {!isStarted ? (
                <div>
                    <Settings
                        setDifficulty={setDifficulty}
                        setCategory={setCategory}
                        category={category}
                    />
                    <button className="btn btn-primary" onClick={startTrivia}>
                        Start
                    </button>
                </div>
            ) : questions.length === 0 ? (
                <p>Loading Questions...</p>
            ) : !gameOver ? (
                <QuestionCard
                    questions={questions}
                    number={number}
                    callback={checkAnswer}
                    score={score}
                    userAnswered={userAnswered}
                />
            ) : (
                <Results score={score} resetTrivia={resetTrivia} />
            )}
        </div>
    );
}

export default App;
