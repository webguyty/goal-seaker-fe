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
    <div>
      <h1>You've reached eval page</h1>
      <p onClick={(e) => runEval(e)}>Evaluate ur goals</p>
      <div>
        <h3>Words</h3>
        <ul>
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
  );
};

export default EvalGoals;
