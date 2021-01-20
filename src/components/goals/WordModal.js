import React, { useContext } from "react";
import GoalsContext from "../../context/goals/goalsContext";

const WordModal = () => {
  const goalsContext = useContext(GoalsContext);
  const { goalStats } = goalsContext;

  const { word, statements } = goalStats;
  const wordCapitalized = word
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : "";

  return (
    // Need to style
    <div id="wordModal" className="modal">
      <div className="modal-content">
        {/* Place word in title and uppercase it */}
        <h4>{wordCapitalized}</h4>
        <p>{wordCapitalized} found in the following statements:</p>
        {/* Loop through and display all the statements */}
        <ul>{statements && statements.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
    </div>
  );
};

export default WordModal;
