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
            options)
          </label>
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
                  "I am very happy in my field of work"
                )
                  ? "#023047"
                  : "lightblue",
                color: selectedGoals.includes(
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
          <div className={styles["countries"]}>
            <label>In which countries would you like to work?</label>
            <select name="country" id="country">
              <option value="germany">Germany</option>
              <option value="austria">Austria</option>
              <option value="switzerland">Switzerland</option>
              <option value="luxemburg">Luxemburg</option>
            </select>
            <button className={styles["add-more"]}>Add more</button>
          </div>
          <div className={styles["cities"]}>
            <label>In which cities would you like to work?</label>
            <select name="city" id="city">
              <option value="No preferences">No preferences</option>
              <option value="berlin">Berlin</option>
              <option value="frankfurt">Frankfurt</option>
              <option value="cologne">Cologne</option>
              <option value="munich">Munich</option>
              <option value="vienna">Vienna</option>
              <option value="zurich">Zürich</option>
            </select>
            <button className={styles["add-more"]}>Add more</button>
          </div>
        </form>
      </div>
      <div className={styles["right-side"]}>
        <img
          src="./woman-quiz-desire.png"
          alt="woman"
          className={styles["picture"]}
        />
        <Link to="/quiz2">
          <button className={styles["next-step"]}>Next step</button>
        </Link>
      </div>
    </div>
  );
}

export default QuizDesires;
