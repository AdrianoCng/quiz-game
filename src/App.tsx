import React, { useState, useRef } from "react";

// components
import Settings from "./components/Settings/Settings";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Results from "./components/Results/Results";

// Types
import { Difficulty, Category, QuizState } from "./Utils";

// Utils
import { fetchQuestions } from "./Utils";

// styles
import { GlobalStyles, Wrapper, Button } from "./App.styles";

const App = () => {
    const [difficulty, setDifficulty] = useState(Difficulty.EASY);
    const [category, setCategory] = useState(Category.GENERAL_KNOWLEDGE);
    const [quiz, setQuiz] = useState<QuizState>({
        questions: [],
        response_code: 0,
    });
    const [isStarted, setIsStarted] = useState(false);
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [userAnswered, setUserAnswered] = useState(false);

    // Stopwatch
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<NodeJS.Timeout>(
        (null as unknown) as NodeJS.Timeout
    );

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };

    const startTrivia = async () => {
        setIsStarted(true);
        startTimer();
        const data = await fetchQuestions(difficulty, category);

        setQuiz(data);
    };

    const resetTrivia = () => {
        setDifficulty(Difficulty.EASY);
        setCategory(Category.GENERAL_KNOWLEDGE);
        setQuiz({ questions: [], response_code: 0 });
        setIsStarted(false);
        setNumber(0);
        setScore(0);
        setGameOver(false);
        setUserAnswered(false);
        setTimer(0);
        clearInterval(timerRef.current);
    };

    const checkAnswer = ({
        currentTarget,
    }: React.MouseEvent<HTMLButtonElement>) => {
        const { iscorrect } = currentTarget.dataset;

        setUserAnswered(true);

        if (iscorrect === "true") setScore((prev) => prev + 1);

        setTimeout(() => {
            if (number >= 9) {
                setGameOver(true);
                clearInterval(timerRef.current);
                return;
            }
            setNumber((prev) => (prev < 9 ? prev + 1 : (prev = 9)));
            setUserAnswered(false);
        }, 1000);
    };

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <h1 className="title">Quiz Game</h1>
                {!isStarted ? (
                    <div>
                        <Settings
                            setDifficulty={setDifficulty}
                            setCategory={setCategory}
                            category={category}
                        />
                        <Button onClick={startTrivia}>Start</Button>
                    </div>
                ) : quiz.questions.length === 0 && quiz.response_code === 0 ? (
                    <p>Loading Questions...</p>
                ) : quiz.response_code === 1 ? (
                    <div className="text-center">
                        <p>Questions not available at the moment.</p>
                        <p>Please choose another category.</p>
                        <Button onClick={resetTrivia}>Go back</Button>
                    </div>
                ) : !gameOver ? (
                    <QuestionCard
                        questions={quiz.questions}
                        number={number}
                        callback={checkAnswer}
                        score={score}
                        userAnswered={userAnswered}
                        timer={timer}
                    />
                ) : (
                    <Results
                        score={score}
                        timer={timer}
                        resetTrivia={resetTrivia}
                    />
                )}
            </Wrapper>
        </>
    );
};

export default App;
