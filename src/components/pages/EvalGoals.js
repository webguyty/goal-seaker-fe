import React, { useContext, useEffect, useState } from "react";
import Preloader from "../layout/Preloader";

import GoalsContext from "../../context/goals/goalsContext";

const EvalGoals = () => {
  const goalsContext = useContext(GoalsContext);
  const {
    getGoals,
    goals,
    evalGoals,
    evaluation,
    setGoalStatement,
  } = goalsContext;

  const [wordStats, setWordStats] = useState([]);
  const [statementStats, setStatementStats] = useState();

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (evaluation !== null) {
      const { wordStats, statementStats } = evaluation;
      wordStats.sort((a, b) => b.count - a.count);
      statementStats.sort((a, b) => b.count - a.count);
      setWordStats(wordStats);
      setStatementStats(statementStats);
    }
  }, [evaluation]);

  const runEval = (e) => {
    e.preventDefault();
    setWordStats([]);
    setStatementStats([]);
    getGoals();
    evalGoals(goals);
  };

  return (
    <div className="eval__page">
      <div className="container">
        <h2 className="eval__headline">You've reached eval page</h2>
        <div className="row center-align">
          <a
            className="waves-effect waves-light btn"
            onClick={(e) => runEval(e)}
          >
            <i className="material-icons left">storage</i>Evaluate Goals
          </a>
        </div>
        <div>
          <h3>Words</h3>
          <ul className="eval__ul eval__ul--word">
            {wordStats &&
              wordStats.map((ws, i) => (
                <a key={i} className="modal-trigger" href="#wordModal">
                  <li
                    className="eval__li eval__li--word"
                    key={i}
                    onClick={() => setGoalStatement(ws.statements)}
                  >
                    {ws.word}{" "}
                    {ws.count > 1 && <p className="eval__badge">{ws.count}</p>}
                  </li>
                </a>
              ))}
          </ul>
        </div>
        <div>
          <h3>Statements</h3>
          <ul className="eval__ul eval__ul--statement">
            {statementStats &&
              statementStats.map((ss, i) => (
                <li className="eval__li eval__li--statement" key={i}>
                  {ss.statement}{" "}
                  {ss.count > 1 && <p className="eval__badge">{ss.count}</p>}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EvalGoals;
