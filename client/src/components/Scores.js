import React from "react";

const Scores = ({ scores }) => {
    // Scores is an array of 1s and 0s that represent correct and incorrect answers
    // This component should display the current score of the quiz
    // The score should be a percentage of correct answers

    const total = scores.length;
    const correct = scores.filter((score) => score === 1).length;
    const score = ((correct / total) * 100).toFixed(0);

    return (
        <div className="current-score">
            {score}%
        </div>
    );
};

export default Scores;
