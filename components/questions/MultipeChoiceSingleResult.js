import { useState } from 'react';
import shuffleArray from '../../functions/generic-usage/shuffleAnArray';

const MultipleChoiceSingleResult = ({ question, rightAnswer, wrongAnswers, explanation, setRunNewQuestion, ...props }) => {
    const [allAnswers] = useState(shuffleArray([...rightAnswer, ...wrongAnswers])); //Run only one time
    
    const [currentChoice, setCurrentChoice] = useState('');
    const [answerCorrect, setAnswerCorrect] = useState(null);

    const [ alreadyAnswered, setAlreadyAnswerd ] = useState(false);
    const [ extraText, setExtraText ] = useState('');

    const handleChange = (e) => {
        setCurrentChoice(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswerCorrect(currentChoice === rightAnswer[0]);
        setAlreadyAnswerd(true);
    }

    const tryAgain = () => {
        setCurrentChoice('');
        setAlreadyAnswerd(false);
        setAnswerCorrect(null);
    }

    const newQuestion = () => {
        tryAgain();
        setRunNewQuestion(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='m-2'>
                <p>{question}</p>
                {allAnswers.map(answer => (

                    <label key={answer} className='d-block'>
                        <input
                            type="radio"
                            value={answer}
                            onChange={handleChange}
                            checked={currentChoice === answer}
                            className='m-2'
                            disabled={alreadyAnswered}
                        />
                        {answer}
                    </label>

                ))}

                <input
                    className={`my-3 btn btn-primary ${alreadyAnswered ? 'd-none' : 'd-block'}`}
                    type='submit'
                />
            </form>

            <div className={`${answerCorrect === null ? 'd-none' : 'border m-2'}`}>
                {answerCorrect ?
                    <div>
                        <div>Correct Answer</div>
                        <div>{explanation}</div>
                    </div> :
                    <div>
                        <div className='m-2'>
                            <div>Wrong answer</div>
                            
                        </div>
                        <div>
                            <div>
                                <button
                                    onClick={tryAgain}
                                    className='btn btn-primary m-2'
                                >
                                    Try again
                                </button>
                                <button
                                    onClick={() => setExtraText(explanation)}
                                    className='btn btn-primary m-2'
                                >
                                    Explanation
                                </button>
                                <button
                                    onClick={() => setExtraText(rightAnswer)}
                                    className='btn btn-primary m-2'
                                >
                                    Answer
                                </button>
                            </div>
                            <div>
                                {extraText}
                            </div>
                        </div>
                    </div>}

                <button onClick={newQuestion} className='btn btn-primary m-2'>
                    Next Question
                </button>
            </div>



        </>
    );
}

export default MultipleChoiceSingleResult;