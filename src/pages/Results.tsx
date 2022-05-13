import React, { useContext } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";

const Results = () => {
  const [appData] = useContext(AppContext);
  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <div>
          <p key={currentIndex}>{answer.value}</p>
          <p>questions[currentIndex].answerOptions[0]</p>
        </div>
     
      ))}
    </div>
  );
};

export default Results;
