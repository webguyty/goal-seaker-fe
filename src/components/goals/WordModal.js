import React, { useContext } from "react";
import GoalsContext from "../../context/goals/goalsContext";

const WordModal = () => {
  const goalsContext = useContext(GoalsContext);
  const { statements } = goalsContext;
  console.log(statements);

  return (
    <div id="wordModal" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
        <ul>
          {statements.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordModal;
