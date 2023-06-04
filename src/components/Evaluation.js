import React, { useState } from "react";
import { useSelector } from "react-redux";
const Evaluation = () => {
  const [answer, setAnswer] = useState("");
  const [marks, setMarks] = useState(0);
  const [examAvailable, setExamAvailable] = useState(false);
  const counter = useSelector(state => state.EXAM)
console.log("EXAMREDUCER",counter)
  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleMarksChange = (event) => {
    setMarks(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform evaluation or submit answer with marks
    // You can add your logic here to evaluate the answer and calculate marks
    console.log("Submitted answer:", answer);
    console.log("Marks:", marks);
  };
  if (!examAvailable) {
    return (
      <div
        style={{
          marginLeft: "-23rem",
          color: "red",
          marginTop: "5rem",
          fontSize: "3rem",
        }}
      >
        No exams available at the moment.
        <br />
        <button
          style={{
            height: "3rem",
            width: "5rem",
            marginLeft: "15rem",
            color: "darkblue",
            fontWeight: "bold",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
        >
          ok
        </button>
      </div>
    );
  }
  return (
    <div style={{ marginLeft: "3rem", marginTop: "6rem" }}>
      <h2>Evaluation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">Answer 1:</label>
        <textarea
          style={{
            backgroundColor: "rgb(236,237,243",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
          id="answer"
          value={answer}
          onChange={handleAnswerChange}
          required
        ></textarea>

        <label style={{ marginLeft: "5rem" }} htmlFor="marks">
          Marks:
        </label>
        <input
          style={{
            backgroundColor: "rgb(236,237,243",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
          type="number"
          id="marks"
          value={marks}
          onChange={handleMarksChange}
          min={0}
          required
        />

        <button
          style={{
            marginLeft: "8rem",
            height: "3rem",
            width: "5rem",
            borderRadius: "2rem",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Evaluation;
