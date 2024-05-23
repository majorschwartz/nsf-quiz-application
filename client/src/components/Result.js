import React from "react";

const Result = ({ score }) => {
    return (
        <div className={`score-box ${score === 1 ? "correct" : "incorrect"}`}>
            {score}
        </div>
    );
}

export default Result;