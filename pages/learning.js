import { useState } from 'react';

import getRandomIndexInArray from './../functions/generic-usage/getRandomIndexInArray';

import { getQuestionById, getAllIds } from './../functions/questionBackendHandler';

const Learning = (props) => {    
    const allQuestionsId = props.value;   
    
    const [ questionsRemaining, setQuestionsRemaining ] = useState(allQuestionsId);
    const [ currentQuestion, setCurrentQuestion ] = useState('');
    
    const startsQuestion = async () => {
        console.log(questionsRemaining);
        if( !questionsRemaining.length ) setCurrentQuestion('All questions answered')
        else{
            const currentQuestionIndex = getRandomIndexInArray(questionsRemaining);
            const myQuestion = await getQuestionById(questionsRemaining[currentQuestionIndex])
            setCurrentQuestion(myQuestion);    
            
            questionsRemaining.splice(currentQuestionIndex , 1)
            setQuestionsRemaining(questionsRemaining);     
        }   
    }   
    
    return (
        <>
            <h1>Learning</h1>
            <button onClick={startsQuestion}>Question</button>
            { JSON.stringify(currentQuestion) }
        </>
      );
}
 
export default Learning;

export const getServerSideProps = async() => {
    const myIds = await getAllIds();
    return{props: {value: myIds}}
}