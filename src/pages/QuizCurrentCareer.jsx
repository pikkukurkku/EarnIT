import React, { useState } from "react";
import styles from "./QuizCurrentCareer.module.css";
import { Link } from "react-router-dom";

function QuizCurrentCareer() {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [salaryInput, setSalaryInput] = useState("");

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
      <div className={styles["content"]}>
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
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
          <textarea
        value={salaryInput}
        onChange={handleSalaryChange}
        placeholder="e.g., 50,000, 60,000, 75,000"
        rows="1"
        cols="50"
      />
     <div className={styles["separator"]}>
            <span className={styles["time-unit"]}>€</span>
          </div>

        </form>
      </div>
      <div className={styles["right-side"]}>
        <img src="./current-career-man.png" alt="woman" className={styles["picture"]} />
        <button className={styles["next-step"]} disabled={!employmentStatus}>
          Next step
        </button>
      </div>
    </div>
   );
  }
  
  export default QuizCurrentCareer;
