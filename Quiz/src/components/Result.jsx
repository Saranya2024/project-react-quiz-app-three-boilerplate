import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ResultComponent() {
  const location = useLocation();

  return (
    <div>
      <div className="head"><h2>Result</h2></div>
      <div className="result">
        <b>You need more practice!</b>
        <p><b>Your score is 20%</b></p>
          <ul>
            <li>Total number of questions <span>{location.state.totalQuestions}</span></li>
            <li>Number of attempted questions <span>{location.state.answeredQuestions}</span></li>
            <li>Number of correct answers <span>{location.state.correctAnswer}</span></li>
            <li>Number of wrong answers <span>{location.state.wrongAnswer}</span></li>
          </ul>
      </div>

      <div className="btn">
        <Link to="/quiz"><button className="play">Play Again</button></Link>
        <Link to="/"><button className="home-result">Back to Home</button></Link>
      </div>
    </div>
  );
}

