import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import { PieChart } from "react-minimal-pie-chart";
import { Modal, Button } from "react-bootstrap";
import ResultValue from "../components/ResultValue";
import '../pages/Results.css';
import { useNavigate } from "react-router-dom";
import InputDetailsForm from "./InputDetailsForm";

const Results = () => {
  const [appData] = useContext(AppContext);
  const [Score,setScore] = useState(3);
  const navigate = useNavigate();
  let correctPercentage = (Score / 5) * 100;
  let incorrectPercentage = 100 - correctPercentage;
  function testAgain() {
    return (
         
      <div>
         window.location.reload();
     navigate("/InputDetailsForm");
      </div>
     
  
    
    )
  }
  return (
    <>
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <>
          <p key={currentIndex}>{answer.value}</p>
                  {questions.map((post:any) => {
              
          
         // if (questions[currentIndex].answerOptions === answer.value) && (questions[currentIndex].answerOptions[2]) == 'true');
           // setScore(score+1);
    
            })
          }
          <Modal show={true} onHide={testAgain} animation={false}>
        <Modal.Header>
           <Modal.Title className="modal-title" >Result: {correctPercentage}%</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <PieChart
          data={[
            {
              title: "Correct",
              value: correctPercentage,
              color: "#38bb38",
            },
            {
              title: "Incorrect",
              value: incorrectPercentage,
              color: "#e24646",
            },
          ]}
        />
        <div className="numbers-container">
          <div className="numbers">
            <div className="number correct modal-title">Correct Answer:{Score}</div>
            <div className="number incorrect modal-title">Wrong Answer:{5-Score}</div>
          </div>
          <div>
           Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
         <p key={currentIndex}>{answer.value}</p>
  
   ) )}
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={testAgain}>
          Test again
        </Button>
      </Modal.Footer>
    </Modal>
      </>
       
      ))}
   </div>

 
   </>
  );
};

export default Results;
