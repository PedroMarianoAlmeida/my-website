import { useEffect, useState } from 'react';
import SingleExactText from './../components/questions/SingleExactText';
import getRandomIndexInArray from './../functions/generic-usage/getRandomIndexInArray';
import { getQuestionById, getAllIds } from './../functions/questionBackendHandler';

const Learning = (props) => {    
    const allQuestionsId = props.value;

    const [questionsRemaining, setQuestionsRemaining] = useState(allQuestionsId);
    const [currentQuestion, setCurrentQuestion] = useState('');

    const [runNewQuestion, setRunNewQuestion] = useState(false);

    const startsQuestion = async () => {
        console.log(questionsRemaining);
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
            setRunNewQuestion(false)
        }
    },[runNewQuestion])

    return (
        <>
            <h1>Learning</h1>  
            <button onClick={startsQuestion}>{currentQuestion === '' ? 'Start' : 'Skip'}</button>     
            { JSON.stringify(currentQuestion)}

            {currentQuestion === '' || currentQuestion === 'All questions answered' ? 
                <div>No question to display</div> :               
                
                <SingleExactText
                    question={currentQuestion.body}
                    answer={currentQuestion.correct_answer.answer}
                    caseSensitive={currentQuestion.correct_answer.caseSensitive}
                    explanation={currentQuestion.explanation}
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