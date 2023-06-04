import React from "react";

const StudentResult = ({ examName, score, totalQuestions }) => {
  const passingScore = 60; // Define the passing score threshold

  // Determine the status based on the score
  const status = score >= passingScore ? "Passed" : "Failed";

  return (
    <div>
      <h2
        style={{
          marginLeft: "-22rem",
          marginTop: "3rem",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        Exam Result
      </h2>
      <h3
        style={{
          marginLeft: "-20rem",
          marginTop: "3rem",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        Exam Name: {examName}
      </h3>
      {score !== null ? (
        <div>
          <p
            style={{
              marginLeft: "-20rem",
              marginTop: "1rem",
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Score: {score}
          </p>
          <p
            style={{
              marginLeft: "-20rem",
              marginTop: "1rem",
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Total Questions: {totalQuestions}
          </p>
          <p
            style={{
              marginLeft: "-20rem",
              marginTop: "1rem",
              color: status === "Passed" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            Status: {status}
          </p>
        </div>
      ) : (
        <p
          style={{
            marginLeft: "-20rem",
            marginTop: "1rem",
            color: "darkblue",
            fontWeight: "bold",
          }}
        >
          No exam written or result not published yet.
        </p>
      )}
    </div>
  );
};

export default StudentResult;
