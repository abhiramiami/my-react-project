import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Manuallysec.css";

function Create() {
  const navigate = useNavigate();
  const [no_of_section, set_section] = useState(1);
  const maparray = new Array(+no_of_section);
  const [selectedSections, setSelectedSections] = useState(
    Array.from({ length: +no_of_section }, () => ({
      name: "",
      questions: 1,
      weightage: "",
    }))
  );
  const [validationError, setValidationError] = useState(false);

  const handleChange = (e) => {
    set_section(e.target.value);
    setSelectedSections(
      Array.from({ length: +e.target.value }, () => ({
        name: "",
        questions: 1,
        weightage: "",
      }))
    );
  };

  const handleSectionChange = (e, index) => {
    const updatedSections = [...selectedSections];
    updatedSections[index].name = e.target.value;
    setSelectedSections(updatedSections);
  };

  const handleQuestionsChange = (e, index) => {
    const updatedSections = [...selectedSections];
    updatedSections[index].questions = +e.target.value;
    setSelectedSections(updatedSections);
  };

  const handleWeightageChange = (e, index) => {
    const updatedSections = [...selectedSections];
    updatedSections[index].weightage = e.target.value;
    setSelectedSections(updatedSections);
  };

  const handleNext = () => {
    const filteredSections = selectedSections.filter(
      (section) => section.name !== "" && section.questions > 0
    );

    if (filteredSections.length !== selectedSections.length) {
      setValidationError(true);
    } else {
      setValidationError(false);
      navigate("/Manuallysec1", { state: { selectedSections: filteredSections } });
    }
  };

  return (
    <div>
      <div className="create-container">
        <div>
          <div className="section-heading">CHOOSING SECTION</div>
          <div className="section-container">
            <h1 className="section-title">NO OF SECTIONS</h1>
            <div className="option1">
              <select onChange={handleChange} className="custom-select">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section-content">
          {no_of_section &&
            maparray.fill("").map((item, index) => {
              return (
                <div className="section-item" key={index}>
                  <div>
                    <p className="section-label">Section {index + 1}</p>
                  </div>
                  <div>
                    <h1 className="section-title">SELECT SECTION</h1>
                    <select
                      className="custom-select"
                      onChange={(e) => handleSectionChange(e, index)}
                    >
                      <option value="">Select Section</option>
                      <option value="fill">FILL IN THE BLANKS</option>
                      <option value="multiple">MULTIPLE CHOICE</option>
                      <option value="match">MATCH THE FOLLOWING</option>
                      <option value="descriptive">DESCRIPTIVE</option>
                    </select>
                  </div>
                  <div>
                    <h1 className="section-title">NUMBER OF QUESTIONS</h1>
                    <select
                      className="custom-select"
                      value={selectedSections[index].questions}
                      onChange={(e) => handleQuestionsChange(e, index)}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>
                  <div>
                    <h1 className="section-title">SELECT WEIGHTAGE</h1>
                    <select
                      className="custom-select"
                      value={selectedSections[index].weightage}
                      onChange={(e) => handleWeightageChange(e, index)}
                    >
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                      <option value="">10</option>
                    </select>
                  </div>
                </div>
              );
            })}
        </div>

        {validationError && (
          <p className="error-message">
            Please select a section for all sections.
          </p>
        )}

        <button className="btn-next" onClick={handleNext}>
          NEXT
        </button>

        <div className="footer">
          <Link to="/" className="back-btn">
            <Icon icon="eva:arrow-back-outline" className="back-icon" />
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Create;
