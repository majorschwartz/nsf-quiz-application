import React from "react";

const Result = ({ score }) => {
    return (
        <div className={`score-box ${score === 1 ? "correct" : "incorrect"}`}>
            {score === 1 ? (
                <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    width="24px"
                    height="24px"
                >
                    <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007l3.849-5.886a.625.625 0 0 1 .865-.181"
                        clip-rule="evenodd"
                    />
                </svg>
            ) : (
                <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                >
                    <path
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 6L6 18M6 6l12 12"
                    />
                </svg>
            )}
        </div>
    );
};

export default Result;
