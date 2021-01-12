import React, { useContext, useEffect } from 'react';
import Preloader from '../layout/Preloader';

import AuthContext from '../../context/auth/authContext';
import GoalsContext from '../../context/goals/goalsContext';

const EvalGoals = () => {

  const goalsContext = useContext(GoalsContext);
  const { getGoals, goals, evalGoals } = goalsContext;

  useEffect(() => {
    if (goals.length === 0) {
      getGoals()
    }
    // eslint-disable-next-line
  }, []);

  evalGoals(goals)

  // console.log(goals)

  return (
    <div>
      <h1>You've reached eval page</h1>
    </div>
  )
}

export default EvalGoals
