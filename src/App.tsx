import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Settings from './components/Settings';
import QuestionCard from './components/QuestionCard';

// Types & Utils
import { Difficulty, Category, Question, fetchQuestions } from './Utils';

function App() {
  const [difficulty, setDifficulty] = useState(Difficulty.EASY);
  const [category, setCategory] = useState(Category.GENERAL_KNOWLEDGE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    console.log(category);
  }, [questions, category])

  const startTrivia = async () => {
    setIsStarted(true);
    const data = await fetchQuestions(difficulty, category);
    setQuestions(data);
  }

  return (
    <div className="container">
      <h1 className="text-center">Quiz Game</h1>
      {!isStarted
      ? 
      <div>
        <Settings setDifficulty={setDifficulty} setCategory={setCategory} category={category}/>
        <button className="btn btn-primary" onClick={startTrivia}>Start</button>
      </div> 
      :
      questions.length === 0 ?
      <p>Loading Questions...</p>
      :
      <QuestionCard questions={questions}/>
      }
    </div>
  );
}

export default App;