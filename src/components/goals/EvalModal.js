import React, { useContext } from "react";
import GoalsContext from "../../context/goals/goalsContext";
import reactStringReplace from "react-string-replace";

const WordModal = () => {
  const goalsContext = useContext(GoalsContext);
  const { goalStats } = goalsContext;

  const { word, statements } = goalStats;
  const wordCapitalized = word
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : "";

  // const se = "Homie This is a string homie";
  // const wo = "is";

  return (
    // Need to style
    <div id="wordModal" className="modal eval__modal">
      <div className="modal-content eval__modal__content">
        {/* Place word in title and uppercase it */}
        <h4>{wordCapitalized}</h4>
        {/* <p>{boldWord(se, wo)}</p> */}
        <p>
          <span className="eval__modal__bold">{wordCapitalized}</span> found in
          the following statements:
        </p>
        {/* Loop through and display all the statements + bold word*/}
        <ul>
          {statements &&
            statements.map((statement, i) => (
              <li key={i}>{boldWord(statement, word)}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

function boldWord(sentence, word) {
  // Does not work. Why??
  // const w = new RegExp(`(/b${word}/b)`, "gi");

  const w = new RegExp(`(${word})`, "gi");

  return reactStringReplace(sentence, w, (match, i) => (
    <span className="eval__modal__bold" key={i}>
      {match}
    </span>
  ));
}

export default WordModal;
