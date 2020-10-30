import { useState, useEffect } from 'react';

const getQuestionById = async (id) => {
    const response = await fetch(`http://localhost:1337/questions/${id}`);
    const data = await response.json()
    return data; 
}

const getRandomIndexInArray = (arr) => {
    const randomIndex = Math.floor( Math.random()* arr.length );
    return randomIndex;
}

const Learning = () => {
    const allQuestionsId = [ 1, 2 ];
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
            {JSON.stringify(currentQuestion)}
        </>
      );
}
 
export default Learning;