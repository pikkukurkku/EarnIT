import React, { useState } from "react";
import styles from "./QuizEducation.module.css";
import { Link } from "react-router-dom";

function QuizEducation() {
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

  return (

    <div className={styles["quiz-desires"]}>

        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>

        <div className={styles["main-content"]}>
        <div className={styles["content"]}>


        <h1 className={styles["header"]}>Education</h1>

        <form className={styles["goals"]}>
        <label>What is the highest degree you have?</label>
          <select name="country" id="country">
            <option value="master">Master's Degree</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="doctorate">Doctorate</option>
          </select>
          <label>Which subjects have you studied? (You can choose several options)</label>
          <div className={styles["answer-pillars"]}>
            <input
              type="text"
              id="goal1"
              name="goal1"
              value="Engineering"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Engineering")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Engineering")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal2"
              name="goal2"
              value="Computer Science"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Computer Science")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Computer Science")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal3"
              name="goal3"
              value="Data Analytics"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Data Analytics")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Data Analytics")
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
            className={styles["add-more"]}
            style={{ backgroundColor: "#8ECAE6" }}
          />
    <label>Which courses have you completed?</label>
          <div className={styles["answer-pillars"]}>
            <input
              type="text"
              id="goal1"
              name="goal1"
              value="Data Analytics Bootcamp"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Data Analytics Bootcamp")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Data Analytics Bootcamp")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal2"
              name="goal2"
              value="IELSTS"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("IELSTS")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("IELSTS")
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
            className={styles["add-more"]}
            style={{ backgroundColor: "#8ECAE6" }}
          />
   
   <label>Which languages do you speak?</label>
          <div className={styles["answer-pillars"]}>
            <input
              type="text"
              id="goal1"
              name="goal1"
              value="German"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("German")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("German")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal2"
              name="goal2"
              value="English"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("English")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("English")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal3"
              name="goal3"
              value="Spanish"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Spanish")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Spanish")
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
            className={styles["add-more"]}
            style={{ backgroundColor: "#8ECAE6" }}
          />

<label>What are your soft skills?</label>
          <div className={styles["answer-pillars"]}>
            <input
              type="text"
              id="goal1"
              name="goal1"
              value="Teamwork"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Teamwork")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Teamwork")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal2"
              name="goal2"
              value="Communication"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Communication")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Communication")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal3"
              name="goal3"
              value="Conflict Resolution"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Conflict Resolution")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Conflict Resolution")
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
            className={styles["add-more"]}
            style={{ backgroundColor: "#8ECAE6" }}
          />

<label>What are your hard skills?</label>
          <div className={styles["answer-pillars"]}>
            <input
              type="text"
              id="goal1"
              name="goal1"
              value="Python"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Python")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Python")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal2"
              name="goal2"
              value="SQL"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("SQL")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("SQL")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal3"
              name="goal3"
              value="Agile"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("Agile")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("Agile")
                  ? "white"
                  : "#023047",
              }}
            />
            <input
              type="text"
              id="goal4"
              name="goal4"
              value="CRM"
              readOnly
              onClick={handleGoalChange}
              className={styles["answer"]}
              style={{
                backgroundColor: selectedGoals.includes("CRM")
                  ? "#023047"
                  : "white",
                color: selectedGoals.includes("CRM")
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
            className={styles["add-more"]}
            style={{ backgroundColor: "#8ECAE6" }}
          />
        </form>
        </div>
     
      <div className={styles["right-side"]}>

        <img
          src="./picture-people.png"
          alt="people"
          className={styles["picture"]}
        />
         </div>
    </div>

        <div className={styles["bottom-div"]}>
      <Link to="/quiz2">
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
        <Link to="/quiz4">
      <button className={styles["step"]} >
          Next step
        </button>
        </Link>
        </div> 
    </div>

  );
}

export default QuizEducation;
