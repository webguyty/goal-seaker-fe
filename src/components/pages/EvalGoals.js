import React, { useContext } from 'react';
import Preloader from '../layout/Preloader';

import AuthContext from '../../context/auth/authContext';

const EvalGoals = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, loading } = authContext;

  return (
    <div>
      <h1>You've reached eval page</h1>
    </div>
  )
}

export default EvalGoals
