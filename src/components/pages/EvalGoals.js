import React, { useContext, useEffect } from "react";
import Preloader from "../layout/Preloader";

import AuthContext from "../../context/auth/authContext";
import GoalsContext from "../../context/goals/goalsContext";

const EvalGoals = () => {
  const goalsContext = useContext(GoalsContext);
  const { getGoals, goals, evalGoals, evaluation } = goalsContext;

  useEffect(() => {
    // if (goals.length === 0) {
    getGoals();
    // }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (evaluation !== null) {
      console.log(evaluation);
    }
  }, [evaluation]);

  const eval1 = (e) => {
    e.preventDefault();
    evalGoals(goals);
  };

  return (
    <div>
      <h1>You've reached eval page</h1>
      <p onClick={(e) => eval1(e)}>Evaluate ur goals</p>
    </div>
  );
};

export default EvalGoals;
