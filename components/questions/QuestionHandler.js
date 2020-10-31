import SingleExactText from '../questions/SingleExactText'
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
            return <MultipleChoiceSingleResult
                question={currentQuestion.body}
                rightAnswer={currentQuestion.answer.rightAnswer}
                wrongAnswers={currentQuestion.answer.wrongAnswers}
                explanation={currentQuestion.explanation}
                setRunNewQuestion={setRunNewQuestion}
            />
            
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