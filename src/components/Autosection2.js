import React, { Component } from "react";

export default class QuestionsAndAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillInBlankQuestions: [],
      multipleChoiceQuestions: [],
      matchTheFollowingQuestions: [],
      descriptiveTypeQuestions: [],
      invigilator: "",
    };
  }

  handleInputChange = (e, questionType, index) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const questions = [...prevState[questionType]];
      questions[index][name] = value;
      return { [questionType]: questions };
    });
  };

  handleAddQuestion = (questionType) => {
    this.setState((prevState) => ({
      [questionType]: [...prevState[questionType], { answer: "" }],
    }));
  };

  handleRemoveQuestion = (questionType, index) => {
    this.setState((prevState) => {
      const questions = [...prevState[questionType]];
      questions.splice(index, 1);
      return { [questionType]: questions };
    });
  };

  handleInvigilatorChange = (e) => {
    this.setState({
      invigilator: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform further actions with the form data
    console.log(this.state);
  };

  render() {
    const {
      fillInBlankQuestions,
      multipleChoiceQuestions,
      matchTheFollowingQuestions,
      descriptiveTypeQuestions,
      invigilator,
    } = this.state;

    return (
      <div>
        <h2>Questions and Answers</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Fill in the Blanks</h3>
          {fillInBlankQuestions.map((question, index) => (
            <div key={index}>
              <div>
                <label>Question {index + 1}</label>
                <input
                  type="text"
                  name="question"
                  value={question.question}
                  onChange={(e) =>
                    this.handleInputChange(e, "fillInBlankQuestions", index)
                  }
                  placeholder="Enter the question"
                />
              </div>
              <div>
                <label>Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={question.answer}
                  onChange={(e) =>
                    this.handleInputChange(e, "fillInBlankQuestions", index)
                  }
                  placeholder="Enter the answer"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.handleRemoveQuestion("fillInBlankQuestions", index)
                }
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => this.handleAddQuestion("fillInBlankQuestions")}
          >
            Add Question
          </button>

          <h3>Multiple Choice</h3>
          {multipleChoiceQuestions.map((question, index) => (
            <div key={index}>
              <div>
                <label>Question {index + 1}</label>
                <input
                  type="text"
                  name="question"
                  value={question.question}
                  onChange={(e) =>
                    this.handleInputChange(e, "multipleChoiceQuestions", index)
                  }
                  placeholder="Enter the question"
                />
              </div>
              <div>
                <label>Options</label>
                <input
                  type="text"
                  name="options"
                  value={question.options}
                  onChange={(e) =>
                    this.handleInputChange(e, "multipleChoiceQuestions", index)
                  }
                  placeholder="Enter the options"
                />
              </div>
              <div>
                <label>Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={question.answer}
                  onChange={(e) =>
                    this.handleInputChange(e, "multipleChoiceQuestions", index)
                  }
                  placeholder="Enter the answer"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.handleRemoveQuestion("multipleChoiceQuestions", index)
                }
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => this.handleAddQuestion("multipleChoiceQuestions")}
          >
            Add Question
          </button>

          <h3>Match the Following</h3>
          {matchTheFollowingQuestions.map((question, index) => (
            <div key={index}>
              <div>
                <label>Question {index + 1}</label>
                <input
                  type="text"
                  name="question"
                  value={question.question}
                  onChange={(e) =>
                    this.handleInputChange(
                      e,
                      "matchTheFollowingQuestions",
                      index
                    )
                  }
                  placeholder="Enter the question"
                />
              </div>
              <div>
                <label>Options</label>
                <input
                  type="text"
                  name="options"
                  value={question.options}
                  onChange={(e) =>
                    this.handleInputChange(
                      e,
                      "matchTheFollowingQuestions",
                      index
                    )
                  }
                  placeholder="Enter the options"
                />
              </div>
              <div>
                <label>Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={question.answer}
                  onChange={(e) =>
                    this.handleInputChange(
                      e,
                      "matchTheFollowingQuestions",
                      index
                    )
                  }
                  placeholder="Enter the answer"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.handleRemoveQuestion("matchTheFollowingQuestions", index)
                }
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => this.handleAddQuestion("matchTheFollowingQuestions")}
          >
            Add Question
          </button>

          <h3>Descriptive Type</h3>
          {descriptiveTypeQuestions.map((question, index) => (
            <div key={index}>
              <div>
                <label>Question {index + 1}</label>
                <input
                  type="text"
                  name="question"
                  value={question.question}
                  onChange={(e) =>
                    this.handleInputChange(e, "descriptiveTypeQuestions", index)
                  }
                  placeholder="Enter the question"
                />
              </div>
              <div>
                <label>Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={question.answer}
                  onChange={(e) =>
                    this.handleInputChange(e, "descriptiveTypeQuestions", index)
                  }
                  placeholder="Enter the answer"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.handleRemoveQuestion("descriptiveTypeQuestions", index)
                }
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => this.handleAddQuestion("descriptiveTypeQuestions")}
          >
            Add Question
          </button>

          <div>
            <label>Invigilator</label>
            <input
              type="text"
              name="invigilator"
              value={invigilator}
              onChange={this.handleInvigilatorChange}
              placeholder="Enter invigilator details"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
