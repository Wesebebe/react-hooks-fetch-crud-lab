import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const[questions, setQuestions] = useState([])

  //Add useEffect Hook
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data))
  }, [])

  function handleDeleteItem(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
  setQuestions(updatedQuestions);
  }

  //Declare variable to store list of questions
  const questionItems = questions.map((question) => (
    <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteItem}/>

  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
