import React, { useContext, useEffect, useState } from "react";
import Preloader from "../layout/Preloader";

import GoalsContext from "../../context/goals/goalsContext";

const EvalGoals = () => {
  const goalsContext = useContext(GoalsContext);
  const { getGoals, goals, evalGoals, evaluation } = goalsContext;

  const [wordStats, setWordStats] = useState("");
  const [statementStats, setStatementStats] = useState("");

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (evaluation !== null) {
      setWordStats(evaluation.wordStats);
      setStatementStats(evaluation.statementStats);
    }
  }, [evaluation]);

  const runEval = (e) => {
    e.preventDefault();
    getGoals();
    evalGoals(goals);
  };

  return (
    <div className="eval__page">
      <div className="container">
        <h2 className="eval__headline">You've reached eval page</h2>
        <div className="row center-align">
          <a class="waves-effect waves-light btn" onClick={(e) => runEval(e)}>
            <i class="material-icons left">storage</i>Evaluate Goals
          </a>
        </div>
        <div>
          <h3>Words</h3>
          <ul className="eval__ul--word">
            {wordStats && wordStats.map((ws, i) => <li key={i}>{ws.word}</li>)}
          </ul>
        </div>
        <div>
          <h3>Statements</h3>
          <ul>
            {statementStats &&
              statementStats.map((ss, i) => <li key={i}>{ss.statement}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EvalGoals;
