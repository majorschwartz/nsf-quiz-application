import React from "react";
import Result from "./Result";

const Results = ({ scores }) => {
    return (
        <div className="results-wrapper">
            {scores.map((score, index) => {
                return (
                    <Result key={index} score={score} />
                );
            })}
        </div>
    );
}

export default Results;