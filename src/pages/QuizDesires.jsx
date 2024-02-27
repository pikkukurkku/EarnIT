import React, { useState } from "react";
import styles from "./QuizDesires.module.css";
import { Link } from "react-router-dom";

function QuizDesires() {
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
    <div className={styles["content"]}>
      <Link to="/">
        <button className={styles["back-button"]}>Back</button>
      </Link>
      <h1 className={styles["header"]}>Desires</h1>

      <form className={styles["goals"]}>
        <label>What are your long-term goals? (pick 3)</label>
        <div className={styles["answer-pillars"]}>
          <input
            type="text"
            id="goal1"
            name="goal1"
            value="Financial stability"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("Financial stability")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("Financial stability")
                ? "white"
                : "#023047",
            }}
          />
          <input
            type="text"
            id="goal2"
            name="goal2"
            value="Team Leadership"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("Team Leadership")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("Team Leadership")
                ? "white"
                : "#023047",
            }}
          />
          <input
            type="text"
            id="goal3"
            name="goal3"
            value="More Responsibility"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes("More Responsibility")
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes("More Responsibility")
                ? "white"
                : "#023047",
            }}
          />
        </div>
        <input
          type="text"
          id="goal4"
          name="goal4"
          value="Change answer"
          readOnly
          onClick={handleChangeAnswer}
          className={styles["changeAnswer"]}
          style={{ backgroundColor: "#8ECAE6" }}
        />
        <label>
          Where do you see yourself in your career path? (you can choose both
          options)</label>
        <div className={styles["answer-pillars2"]}>
          <input
            type="text"
            id="goal1"
            name="goal1"
            value="I am very happy in my field of work"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes(
                "I am very happy in my field of work") ? "#023047"  : "lightblue", color: selectedGoals.includes(
                "I am very happy in my field of work"
              )
                ? "white"
                : "#023047",
            }}
          />
          <input
            type="text"
            id="goal2"
            name="goal2"
            value="I could see myself in a different job field"
            readOnly
            onClick={handleGoalChange}
            className={styles["answer"]}
            style={{
              backgroundColor: selectedGoals.includes(
                "I could see myself in a different job field"
              )
                ? "#023047"
                : "lightblue",
              color: selectedGoals.includes(
                "I could see myself in a different job field"
              )
                ? "white"
                : "#023047",
            }}
          />
        </div>
      </form>
      </div>
      <img src="./woman-quiz-desire.png" alt="woman" className={styles["picture"]} />
    </div>
  );
}

export default QuizDesires;
