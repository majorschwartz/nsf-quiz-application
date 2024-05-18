import React from "react";

import AnswerBox from "./AnswerBox";

const QandA = ({ quiz, setQuiz, setFeedback, scores, setScores }) => {
    function checkAnswer(number) {
        console.log("Checking answer: " + number);
        
        if (quiz.active) {
            const updatedQuiz = { ...quiz };
            const anyAnswerClicked = updatedQuiz.answers.some(ans => ans.status === "correct" || ans.status === "incorrect");

            if (number === updatedQuiz.correct_answer) {
                updatedQuiz.answers[number - 1].status = "correct";
                if (!anyAnswerClicked) {
                    setScores([1, ...scores]);
                }
                updatedQuiz.answers.forEach((ans, index) => {
                    if (ans.status === "pending" && index !== number - 1) {
                        ans.status = "disabled";
                    }
                });
                updatedQuiz.active = false;
            } else {
                updatedQuiz.answers[number - 1].status = "incorrect";
                if (!anyAnswerClicked) {
                    setScores([0, ...scores]);
                }
            }
            setQuiz(updatedQuiz);
        }
    }

    return (
        <div className="question-box">
            {quiz.question && (
                <div className="question-container">{quiz.question}</div>
            )}
            {quiz.answers[0].answer && (
                <div className="answer-container">
                    {quiz.answers.map(({ answer, value, status }, i) => (
                        <AnswerBox
                            text={answer}
                            status={status}
                            key={i}
                            number={value}
                            onSelect={checkAnswer}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default QandA;
