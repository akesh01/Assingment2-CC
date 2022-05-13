import { useContext, useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";


const TOTAL_QUESTIONS = questions.length;
let colored:any ;
const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
   
  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }


  function HandlePaginationClick(event:any,value:any) {
    setCurrentQuestion(value);
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <Box key={question.id}>
                  <Pagination count={TOTAL_QUESTIONS} variant="outlined" color="primary" hideNextButton={true} hidePrevButton={true} page={currentQuestion} onChange={HandlePaginationClick} />
                <Typography variant="h3">Question: {index + 1}</Typography>
                <Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <QuestionCard
                    id={question.id}
                    question={question.question}
                    questionType={question.questionType as QuestionType}
                    answers={question.answerOptions}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={index === 0}
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      Previous
                    </Button>

                    <Button onClick={() => handleNextButtonClick(index)}>
                      {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            )
        )
      )}
    </Box>
  );
};


export default Questions;
