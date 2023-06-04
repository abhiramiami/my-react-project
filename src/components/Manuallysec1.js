import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Manuallysec1.css";

function Manuallysec1() {
  const location = useLocation();
  const { selectedSections } = location.state;
  const [sections, setSections] = useState(selectedSections);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const renderQuestionFields = () => {
    if (!sections || sections.length === 0) {
      return null; // or return a message indicating no sections are available
    }

    return sections.map((section, index) => {
      return (
        <div className="section-item1" key={index}>
          <div>
            <p className="section-label1">Section {index + 1}</p>
          </div>
          {renderSectionFields(section.name, index)}
        </div>
      );
    });
  };

  const renderSectionFields = (sectionType, index) => {
    switch (sectionType) {
      case "fill":
        return renderFillInTheBlanksFields(index);
      case "multiple":
        return renderMultipleChoiceFields(index);
      case "match":
        return renderMatchTheFollowingFields(index);
      case "descriptive":
        return renderDescriptiveFields(index);
      default:
        return null;
    }
  };

  const renderFillInTheBlanksFields = (index) => {
    const section = sections[index];
    const numFields = section.numFields || 1;
    const maxFields = section.questions; // Maximum number of fields/questions

    return (
      <div>
        <h1 className="section-titlep">Fill in the Blanks</h1>
        {Array.from({ length: numFields }, (_, fieldIndex) => (
          <div key={fieldIndex}>
            <input
              className="text1"
              type="text"
              placeholder={`Question ${fieldIndex + 1}`}
              name={`question-${index}-${fieldIndex}`}
              required
            />
            <input
              className="texta"
              type="text"
              placeholder={`Answer ${fieldIndex + 1}`}
              name={`answer-${index}-${fieldIndex}`}
              required
            />
          </div>
        ))}
        {numFields < maxFields && (
          <button
            className="quest1"
            onClick={() => incrementFields(index, numFields)}
          >
            Add Question
          </button>
        )}
      </div>
    );
  };

  const renderMultipleChoiceFields = (index) => {
    const section = sections[index];
    const numOptions = section.numOptions || 4;
    const numQuestions = section.questions; // Number of questions selected from Manuallysec1

    const renderOptions = () => {
      return Array.from({ length: numOptions }, (_, optionIndex) => (
        <div className="text6" key={optionIndex}>
          <input
            className="text5"
            type="text"
            placeholder={`Option ${optionIndex + 1}`}
            name={`option-${index}-${optionIndex}`}
            required
          />
        </div>
      ));
    };

    const renderQuestions = () => {
      return Array.from({ length: numQuestions }, (_, questionIndex) => (
        <div key={questionIndex}>
          <input
            className="text2"
            type="text"
            placeholder={`Question ${questionIndex + 1}`}
            name={`question-${index}-${questionIndex}`}
            required
          />
          <div>{renderOptions()}</div>
        </div>
      ));
    };

    const renderAllQuestions = () => {
      return Array.from({ length: numQuestions }, (_, questionIndex) => (
        <div key={questionIndex}>
          {renderQuestions()[questionIndex]}
          <div>
            <input
              className="answer"
              type="text"
              placeholder="Answer"
              name={`answer-${index}-${questionIndex}`}
              required
            />
          </div>
        </div>
      ));
    };

    return (
      <div>
        <h1 className="section-title">Multiple Choice</h1>
        {renderAllQuestions()}
      </div>
    );
  };

  const renderMatchTheFollowingFields = (index) => {
    const section = sections[index];
    const numPairs = section.numPairs || 4;
    const maxPairs = section.questions; // Maximum number of pairs/questions

    const renderPairs = () => {
      return Array.from({ length: numPairs }, (_, pairIndex) => (
        <div key={pairIndex}>
          <input
            className="match2"
            type="text"
            placeholder={`Option ${pairIndex + 1} - A`}
            name={`option-a-${index}-${pairIndex}`}
            required
          />
          <input
            className="match3"
            type="text"
            placeholder={`Option ${pairIndex + 1} - B`}
            name={`option-b-${index}-${pairIndex}`}
            required
          />
        </div>
      ));
    };

    return (
      <div>
        <h1 className="section-title">Match the Following</h1>
        {Array.from({ length: numPairs }, (_, pairIndex) => (
          <div key={pairIndex}>
            <input
              className="match1"
              type="text"
              placeholder={`Question ${pairIndex + 1}`}
              name={`question-${index}-${pairIndex}`}
              required
            />
            <div>{renderPairs()}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderDescriptiveFields = (index) => {
    const section = sections[index];
    const numQuestions = section.questions; // Number of questions selected from Manuallysec1

    return (
      <div>
        <h1 className="section-title">Descriptive Questions</h1>
        {Array.from({ length: numQuestions }, (_, questionIndex) => (
          <div key={questionIndex}>
            <input
              className="desc"
              type="text"
              placeholder={`Question ${questionIndex + 1}`}
              name={`question-${index}-${questionIndex}`}
              required
            />
            <textarea
              className="desc1"
              placeholder={`Description ${questionIndex + 1}`}
              name={`description-${index}-${questionIndex}`}
              required
            ></textarea>
          </div>
        ))}
      </div>
    );
  };

  const incrementFields = (sectionIndex, numFields) => {
    const updatedSections = [...sections];
    const section = updatedSections[sectionIndex];
    const maxFields = section.questions; // Maximum number of fields/questions

    if (numFields < maxFields) {
      updatedSections[sectionIndex] = {
        ...section,
        numFields: numFields + 1,
      };

      setSections(updatedSections);
    }
  };

  const handleSave = () => {
    const form = document.getElementById("manually-sec1-form");
    if (form.checkValidity()) {
      alert("Saved successfully!"); // Show alert popup for saving
      setErrors([]);
      navigate("/Manually2"); // Navigate to another page
    } else {
      const errorInputs = Array.from(form.querySelectorAll(":invalid"));
      const errorNames = errorInputs.map((input) => input.name);
      setErrors(errorNames);
    }
  };

  return (
    <div className="manually-sec1-container">
      <h1 className="section-heading"> Questions - Manually</h1>
      <form id="manually-sec1-form">
        {renderQuestionFields()}
        {errors.length > 0 && (
          <div className="error-message">
            The following fields are required: {errors.join(", ")}
          </div>
        )}
      </form>
      <div className="button-container">
        <button className="back-btn1" onClick={() => navigate(-1)}>
          <Icon icon="ant-design:close-outlined" className="icon" />
          Cancel
        </button>
      </div>
      <div>
        <button className="btn-save" onClick={handleSave}>
          <Icon icon="ant-design:check-outlined" className="icon" />
          Save
        </button>
      </div>
    </div>
  );
}

export default Manuallysec1;
