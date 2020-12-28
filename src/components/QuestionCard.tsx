import React from "react";
import Button from "react-bootstrap/Button";

import { Question } from "../Utils";

type Props = {
  questions: Question[];
  number: number;
  score: number;
  userAnswered: boolean;
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
  questions,
  number,
  score,
  callback,
  userAnswered,
}) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <p>Score: {score}</p>
          <p>Time:</p>
        </div>
        <div>
          <p>Question {number + 1} / 10</p>
        </div>
      </div>

      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: questions[number].question,
          }}
        ></p>
      </div>
      {questions[number].answers.map((answer, index) => {
        return (
          <Button
            key={index}
            block
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
            disabled={userAnswered}
            onClick={callback}
            data-iscorrect={questions[number].correct_answer === answer}
            variant={
              questions[number].correct_answer === answer && userAnswered
                ? "success"
                : questions[number].correct_answer !== answer && userAnswered
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
