import { useState } from 'react';

const ExactText = ({question, answer, caseSensitive, explanation, setRunNewQuestion, ...props}) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ answerCorrect, setAnswerCorrect ] = useState(null);

    const [ alreadyAnswered, setAlreadyAnswerd ] = useState(false);
    const [ extraText, setExtraText ] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (caseSensitive) setAnswerCorrect(inputValue === answer);
        else setAnswerCorrect( inputValue.toLowerCase() === answer.toLowerCase() );
        setAlreadyAnswerd(true);
    }

    const tryAgain = () => {
        setInputValue('');
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
                <label className='d-block my-3'>{question}</label>

                <input 
                    className='mr-2'
                    placeholder="type your answer"
                    value={inputValue}
                    onChange={handleChange}
                    disabled={alreadyAnswered}                    
                /> 

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
                            <div>{caseSensitive ? <small>Note: This question is Case Sensitive'</small> : ''}</div> 
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
                                    onClick={() => setExtraText(answer)}
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

export default ExactText;