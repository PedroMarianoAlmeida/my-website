import { useEffect, useState } from 'react';
import QuestionHandler from '../components/questions/QuestionHandler';
import getRandomIndexInArray from './../functions/generic-usage/getRandomIndexInArray';
import { getQuestionById, getAllIds } from './../functions/questionBackendHandler';

const Learning = (props) => {    
    const allQuestionsId = props.value;

    const [questionsRemaining, setQuestionsRemaining] = useState(allQuestionsId);
    const [currentQuestion, setCurrentQuestion] = useState('');

    const [runNewQuestion, setRunNewQuestion] = useState(false);

    const startsQuestion = async () => {
        if (!questionsRemaining.length) setCurrentQuestion('All questions answered')
        else {
            const currentQuestionIndex = getRandomIndexInArray(questionsRemaining);
            const myQuestion = await getQuestionById(questionsRemaining[currentQuestionIndex])
            setCurrentQuestion(myQuestion);

            questionsRemaining.splice(currentQuestionIndex, 1)
            setQuestionsRemaining(questionsRemaining);
        }
    }

    useEffect(() => {
        if( runNewQuestion ){
            startsQuestion();
            setRunNewQuestion(false);
            console.log(currentQuestion);
        }
    },[runNewQuestion])

    return (
        <>
            <h1>Learning</h1>  
            <button className='btn btn-primary m-2' onClick={startsQuestion}>{currentQuestion === '' ? 'Start' : 'Skip'}</button>     

            {currentQuestion === '' || currentQuestion === <div>All questions answered</div> ? 
                <div>No question to display</div> :               
                <QuestionHandler 
                    currentQuestion={currentQuestion}
                    setRunNewQuestion={setRunNewQuestion}
                />
            }
        </>
    );
}

export default Learning;

export const getServerSideProps = async () => {
    const myIds = await getAllIds();
    return { props: { value: myIds } }
}