import React, { useState, useEffect } from 'react';
import { data } from './data';
import './quizstyle.css';

export default function Quizapp() {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);
    const [finished, setFinish] = useState(false);
    const [shuffledData, setShuffledData] = useState([]);

    useEffect(() => {
        const combinedData = data.map((question, idx) => ({
            ...question,
            correctAnswer: ['Option3', 'Option4', 'Option2', 'Option1',
                'Option1', 'Option4', 'Option3', 'Option3', 'Option4', 'Option2'][idx],
        }));

        const shuffled = combinedData.sort(() => Math.random() - 0.5);
        setShuffledData(shuffled);
    }, []);

    const handleNext = () => {
        if (shuffledData[index].correctAnswer === option) {
            setScore(score + 1);
        }
        if (index < shuffledData.length - 1) {
            setIndex(index + 1);
            setOption(null);
        } else {
            setFinish(true);
        }
    };

    if (!started) {
        return (
            <div className="quiz">
                <h1>Welcome to the Quiz App!</h1>
                <h5>Click on the Start button to begin the quiz</h5>
                <button onClick={() => setStarted(true)}>Start</button>
            </div>
        );
    }

    if (finished) {
        return (
            <div className='scorePage'>
                <h1>Quiz Finished!</h1>
                <h3>Your score is {score} out of {data.length}</h3>
                <br />
                <h2>Thank you!</h2>
            </div>
        );
    }

    const handleSelect = (optn) => {
        setOption(optn);
    }
    if (shuffledData.length === 0) return null;


    return (
        <div className="quiz">
            <h1>{shuffledData[index].Question}</h1>
            <ul>
                <li
                    className={option === 'Option1' ? 'selected' : ''}
                    onClick={() => handleSelect('Option1')}
                >
                    {shuffledData[index].Option1}
                </li>
                <li
                    className={option === 'Option2' ? 'selected' : ''}
                    onClick={() => handleSelect('Option2')}
                >
                    {shuffledData[index].Option2}
                </li>
                <li
                    className={option === 'Option3' ? 'selected' : ''}
                    onClick={() => handleSelect('Option3')}
                >
                    {shuffledData[index].Option3}
                </li>
                <li
                    className={option === 'Option4' ? 'selected' : ''}
                    onClick={() => handleSelect('Option4')}
                >
                    {shuffledData[index].Option4}
                </li>
            </ul>
            <button onClick={handleNext} disabled={!option}>Next</button>
            <h5>Question {index + 1} of {shuffledData.length}</h5>
        </div>
    );

}