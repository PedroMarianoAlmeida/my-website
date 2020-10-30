import { useState } from 'react';

const ExactText = ({question, answer, caseSensitive, numberOfTips, explanation, ...props}) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ answerCorrect, setAnswerCorrect ] = useState(null);
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswerCorrect(inputValue === answer);
    }
    
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label className='d-block my-3'>{question}</label>

                <input 
                    className='mr-2'
                    placeholder="type your answer"
                    value={inputValue}
                    onChange={handleChange}
                /> 
                
                <button className='btn btn-primary'>Use Tip</button>

                <input className='d-block my-3 btn btn-primary' type='submit' disabled={!inputValue} />
            </form>

            <div className={`${answerCorrect === null ? 'd-none' : 'border w-25'}`}>           
                <div>This answer is {answerCorrect ? 'correct' : 'incorrect'}.</div>
                <div>{answerCorrect ? explanation : `The correct answer is ${answer}`}</div>
            </div>
       </>
     );
}

export default ExactText;