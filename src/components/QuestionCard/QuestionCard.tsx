import React from "react";
// import Button from "react-bootstrap/Button";

// Types
import { Question } from "../../Utils";

// Utils
import { formatTime } from "../../Utils";

// Styles
import { QuestionButton } from "./QuestionCard.styles";

type Props = {
    questions: Question[];
    number: number;
    score: number;
    userAnswered: boolean;
    timer: number;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
    questions,
    number,
    score,
    userAnswered,
    timer,
    callback,
}) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <p>Time: {formatTime(timer)}</p>
                    <p>
                        Score: <span className="score">{score}</span>
                    </p>
                </div>
                <div className="d-flex justify-content-end">
                    <p>Question {number + 1} / 10</p>
                </div>
            </div>

            <div>
                <p
                    className="font-italic"
                    dangerouslySetInnerHTML={{
                        __html: questions[number].question,
                    }}
                ></p>
            </div>
            {questions[number].answers.map((answer, index) => {
                return (
                    <QuestionButton
                        key={index}
                        block
                        size={"lg"}
                        dangerouslySetInnerHTML={{
                            __html: answer,
                        }}
                        disabled={userAnswered}
                        onClick={callback}
                        data-iscorrect={
                            questions[number].correct_answer === answer
                        }
                        variant={
                            questions[number].correct_answer === answer &&
                            userAnswered
                                ? "success"
                                : questions[number].correct_answer !== answer &&
                                  userAnswered
                                ? "danger"
                                : "info"
                        }
                    />
                );
            })}
        </div>
    );
};

export default QuestionCard;
