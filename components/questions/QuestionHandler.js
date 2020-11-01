import SingleExactText from '../questions/SingleExactText'
import MultipleChoiceMultipleResults from './MultipeChoiceMultipeResults'
import MultipleChoiceSingleResult from './MultipeChoiceSingleResult'

const selectRightType = (currentQuestion, setRunNewQuestion) => {
    //Study how to transform this switch in an array
    switch (currentQuestion.question_type) {
        case "Single Exact Text":
            return <SingleExactText
                question={currentQuestion.body}
                answer={currentQuestion.answer.answer}
                caseSensitive={currentQuestion.correct_answer.caseSensitive}
                explanation={currentQuestion.explanation}
                setRunNewQuestion={setRunNewQuestion}
            />
        case "Multiple Choice Single Result":
            return <MultipleChoiceMultipleResults
                question={currentQuestion.body}
                rightAnswer={currentQuestion.answer.rightAnswer}
                wrongAnswers={currentQuestion.answer.wrongAnswers}
                explanation={currentQuestion.explanation}
                setRunNewQuestion={setRunNewQuestion}
            />

            case "Multiple Choice Multiple Results":
                return <MultipleChoiceSingleResult
                    question={currentQuestion.body}
                    rightAnswers={currentQuestion.answer.rightAnswers}
                    wrongAnswers={currentQuestion.answer.wrongAnswers}
                    explanation={currentQuestion.explanation}
                    setRunNewQuestion={setRunNewQuestion}
                />
            //Multiple Choice Multiple Result
            //Multiple Exact Text
            //Pair words
            //Pair words and images
            //Put words in correct order
            //Put words and images in correct order
            //Connect the first column with the second (only words)
            //Connect the first column with the second (words and images)
            //Type words for slots
            //Drag specific words for slots
            //Drag specific images for slots
            //Run javascript code and test them
            
        default:
            return <div>
                <div>Type not indetificaded: {currentQuestion.question_type}</div>
                <div><strong>Full JSON: </strong>{JSON.stringify(currentQuestion)}</div>
            </div>
    }
}

const QuestionHandler = ({ currentQuestion, setRunNewQuestion, ...props }) => {
    return (
        <>
            {selectRightType(currentQuestion, setRunNewQuestion)}
        </>
    );
}

export default QuestionHandler;