import React, { useState } from "react";
import Results from "./Results";
import Topic from "./Topic";
import QandA from "./QandA";

const Quiz = () => {
    const [scores, setScores] = useState([]);
    const [topic, setTopic] = useState("");
    const [prevQ, setPrevQ] = useState([]);
    const [quiz, setQuiz] = useState({
        active: false,
        question: null,
        answers: [
            { answer: null, value: 1, status: "pending" },
            { answer: null, value: 2, status: "pending" },
            { answer: null, value: 3, status: "pending" },
            { answer: null, value: 4, status: "pending" },
        ],
        correct_answer: null,
    });

    return (
        <div className="main-section">
            <Results scores={scores} />
            <div className="wrapper">
                <Topic
                    topic={topic}
                    setTopic={setTopic}
                    setQuiz={setQuiz}
                    prevQ={prevQ}
                    setPrevQ={setPrevQ}
                />
                <QandA quiz={quiz} setQuiz={setQuiz} scores={scores} setScores={setScores} />
            </div>
        </div>
    );
};

export default Quiz;
