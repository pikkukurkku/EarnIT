import React, { useState } from "react";
import styles from "./QuizPreviousCareer.module.css";
import { Link } from "react-router-dom";

function QuizPreviousCareer() {
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
        <h1 className={styles["header"]}>Previous Job Situation</h1>

        <form className={styles["goals"]}>
          <label>Job Title</label>
          <div className={styles["custom-input"]}>
          <input type="text" className={styles["text-unit"]}
        value={salaryInput}
        onChange={handleSalaryChange}
        rows="1"
        cols="50"
      />
      </div>

          <label>Work period</label>

        </form>
      </div>
      </div>
    
      <div className={styles["bottom-div"]}>
      <Link to="/quiz2">
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
      <button className={styles["step"]} disabled={!employmentStatus}>
          Next step
        </button>
        </div>
    </div>
  
   );
  }
  
  export default QuizPreviousCareer;
