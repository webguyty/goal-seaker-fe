import React, { useContext } from "react";
import GoalsContext from "../../context/goals/goalsContext";

const WordModal = () => {
  const goalsContext = useContext(GoalsContext);
  const { goalStats } = goalsContext;

  const { word, statements } = goalStats;
  const wordCapitalized = word
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : "";

  const s = "This is a string";
  const w = "is";

  return (
    // Need to style
    <div id="wordModal" className="modal eval__modal">
      <div className="modal-content eval__modal__content">
        {/* Place word in title and uppercase it */}
        <h4>{wordCapitalized}</h4>
        <p>{boldWord(s, w)}</p>
        <p>
          <span className="eval__modal__bold">{wordCapitalized}</span> found in
          the following statements:
        </p>
        {/* Loop through and display all the statements */}
        <ul>{statements && statements.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
    </div>
  );
};

function boldWord(sentence, word) {
  return sentence.replace(
    /this/i,
    `<span className="eval__modal__bold">This</span>`
  );
}

export default WordModal;
