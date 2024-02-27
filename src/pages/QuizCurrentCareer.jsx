import React, { useState } from "react";
import styles from "./QuizCurrentCareer.module.css";
import { Link } from "react-router-dom";

function QuizCurrentCareer() {
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleStatusChange = (value) => {
    setEmploymentStatus(value);
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
          <input type="text" id="jobTitle" name="jobTitle" />

          <label>Do you work full-time or part-time?</label>
          <div className={styles["radio-buttons"]}>
            <label
              htmlFor="fullTime"
              className={`${styles["radio-label"]} ${employmentStatus === "Full-time" && styles["selected"]}`}
              onClick={() => handleStatusChange("Full-time")}
            >
              Full-time
              <input
                type="radio"
                id="fullTime"
                name="employmentStatus"
                value="Full-time"
                checked={employmentStatus === "Full-time"}
                onChange={() => {}}
              />
            </label>

            <label
              htmlFor="partTime"
              className={`${styles["radio-label"]} ${employmentStatus === "Part-time" && styles["selected"]}`}
              onClick={() => handleStatusChange("Part-time")}
            >
              Part-time
              <input
                type="radio"
                id="partTime"
                name="employmentStatus"
                value="Part-time"
                checked={employmentStatus === "Part-time"}
                onChange={() => {}}
              />
            </label>
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

