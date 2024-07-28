import React from "react";
import Result from "./Result";
import Scores from "./Scores";

const Results = ({ scores }) => {
    return (
        <>
            {scores.length > 0 ? (
                <div className="results-wrapper">
                    <Scores scores={scores} />
                    {scores.map((score, index) => {
                        return <Result key={index} score={score} />;
                    })}
                </div>
            ) : null}
        </>
    );
};

export default Results;
