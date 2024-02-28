import React, { useState } from "react";
import styles from "./QuizCurrentCareer.module.css";
import { Link } from "react-router-dom";

function QuizCurrentCareer() {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [salaryInput, setSalaryInput] = useState("");
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleGoalChange = (e) => {
    const goal = e.target.value;
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(
        selectedGoals.filter((selectedGoal) => selectedGoal !== goal)
      );
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleChangeAnswer = () => {
    setSelectedGoals([]);
  };

  const handleSalaryChange = (e) => {
    const inputValue = e.target.value;

    const regex = /^[\d,]*$/; 
    if (regex.test(inputValue) || inputValue === "") {
      setSalaryInput(inputValue);
    }
  }
  const handleStatusChange = (value) => {
    setEmploymentStatus(value);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

 

  return (
    
    <div className={styles["quiz-desires"]}>
      
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
        <div className={styles["main-content"]}>
        <div className={styles["content"]}>
        <h1 className={styles["header"]}>Current Job Situation</h1>

        <form className={styles["goals"]}>
          <label>What is your current job title?</label>
          <select name="country" id="country">
            <option value="No preferences"></option>
            <option value="product">Product</option>
            <option value="product-manager">Product Manager</option>
            <option value="senior-product-manager">Senior Product Manager</option>
            <option value="vp-of-product">VP of Product</option>
          </select>

          <label>Do you work full-time or part-time?</label>

          <div className={styles["radio-buttons"]}>
            <div
              className={`${styles["radio-option"]} ${employmentStatus === "Full-time" && styles["selected"]}`}
              onClick={() => handleStatusChange("Full-time")}
            >
              Full-time
            </div>

            <div
              className={`${styles["radio-option"]} ${employmentStatus === "Part-time" && styles["selected"]}`}
              onClick={() => handleStatusChange("Part-time")}
            >
              Part-time
            </div>
          </div>

          <label>How long have you been working in this position?</label>
          <div className={styles["custom-input"]}>
            <input type="number" min="0" onChange={(e) => handleInputChange(e.target.value)} />
            <div className={styles["separator"]} />
            <span className={styles["time-unit"]}>{inputValue === "1" ? "year" : "years"}</span>
          </div>

          <label>What is your current salary per year? (without extra bonuses)</label>
          <div className={styles["custom-input"]}>
          <input type="text" className={styles["text-unit"]}
        value={salaryInput}
        onChange={handleSalaryChange}
        placeholder="e.g., 50,000, 60,000, 75,000"
        rows="1"
        cols="50"
      />
     <div className={styles["separator"]}>
            <span className={styles["time-unit"]}>€</span>
          </div>
          </div>
          
        <label>Do you have any additional work responsibilities?</label>
        <div className={styles["answer-pillars"]}>
          <input
            type="text"
            id="goal1"
            name="goal1"
            value="Leadership Role"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("Leadership Role")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("Leadership Role")
                ? "white"
                : "#023047",
            }}
          />
          <input
            type="text"
            id="goal2"
            name="goal2"
            value="Stakeholder Communication"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("Stakeholder Communication")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("Stakeholder Communication")
                ? "white"
                : "#023047",
            }}
          />
          <input
            type="text"
            id="goal3"
            name="goal3"
            value="Mentorship"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("Mentorship")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("Mentorship")
                ? "white"
                : "#023047",
            }}
          />
        </div>
        <input
          type="text"
          id="goal4"
          name="goal4"
          value="Add more"
          readOnly
          onClick={handleChangeAnswer}
          className={styles["changeAnswer"]}
          style={{ backgroundColor: "#8ECAE6" }}
        />
        </form>
      </div>
      <div className={styles["right-side"]}>
        <img src="./current-career-man.png" alt="woman" className={styles["picture"]} />

      </div>
      </div>
    
      <div className={styles["bottom-div"]}>
      <Link to="/quiz1">
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
        <Link to="/quiz3">
      <button className={styles["step"]}>
          Next step
        </button>
        </Link>
        </div>
    </div>
  
   );
  }
  
  export default QuizCurrentCareer;


  // <button className={styles["step"]} disabled={!employmentStatus}> update later