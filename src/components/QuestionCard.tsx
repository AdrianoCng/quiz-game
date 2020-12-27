import React, {useEffect, useState} from 'react';

import {Question, shuffleAnswers} from '../Utils';

type Props = {
    questions: Question[]
}

const QuestionCard: React.FC<Props> = ({questions}) => {
    const [answers, setAnswers] = useState<string[]>([]);

    let number = 0;

    useEffect(() => {
        const {incorrect_answers, correct_answer} = questions[number];

        const answers = incorrect_answers;

        if (!answers.includes(correct_answer)) {
            answers.push(correct_answer);
        }
        
        setAnswers(shuffleAnswers(answers));
    }, [number, questions]);

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <p>Score:</p>
                    <p>Time:</p>
                </div>
                <div>
                    <p>Question {number + 1} / 10</p>
                </div>
            </div>
            
            <div>
                <p dangerouslySetInnerHTML={{__html: questions[number].question}}></p>
            </div>
            {answers.map(answer => {
                return <button className="btn btn-info btn-block">{answer}</button>
            })}
        </div>
    )
}

export default QuestionCard;