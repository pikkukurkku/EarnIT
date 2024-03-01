import { useState } from "react";
import styles from "./QuizDesires.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function QuizDesires() {
  const navigate = useNavigate();
  const [goals, setGoals] = useState([]);
  const [careerPathOptions, setCareerPathOptions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const handleGoalChange = (e) => {
    const goal = e.target.value;
    if (goals.includes(goal)) {
      setGoals(goals.filter((goal) => goal !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const handleCareerChange = (e) => {
    const careerOption = e.target.value;
    if (careerPathOptions.includes(careerOption)) {
      setCareerPathOptions(
        careerPathOptions.filter(
          (careerOption) => careerOption !== careerOption
        )
      );
    } else {
      setCareerPathOptions([...careerPathOptions, careerOption]);
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setCountries([...countries, country]);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setCities([...cities, city]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5005/quizinput", {
        goals,
        careerPathOptions,
        countries,
        cities,
      })
      .then((response) => {
        console.log("Response from backend =>", response);
        navigate("/quiz2");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles["quiz-desires"]}>
      <div className={styles["content"]}>
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
        <h1 className={styles["header"]}>Desires</h1>

        <form onSubmit={handleSubmit} className={styles["goals"]}>
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
                backgroundColor: goals.includes("Financial stability")
                  ? "#023047"
                  : "lightblue",
                color: goals.includes("Financial stability")
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
                backgroundColor: goals.includes("Team Leadership")
                  ? "#023047"
                  : "lightblue",
                color: goals.includes("Team Leadership") ? "white" : "#023047",
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
                backgroundColor: goals.includes("More Responsibility")
                  ? "#023047"
                  : "lightblue",
                color: goals.includes("More Responsibility")
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
              onClick={handleCareerChange}
              className={styles["answer"]}
              style={{
                backgroundColor: careerPathOptions.includes(
                  "I am very happy in my field of work"
                )
                  ? "#023047"
                  : "lightblue",
                color: careerPathOptions.includes(
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
              onClick={handleCareerChange}
              className={styles["answer"]}
              style={{
                backgroundColor: careerPathOptions.includes(
                  "I could see myself in a different job field"
                )
                  ? "#023047"
                  : "lightblue",
                color: careerPathOptions.includes(
                  "I could see myself in a different job field"
                )
                  ? "white"
                  : "#023047",
              }}
            />
          </div>
          <div className={styles["countries"]}>
            <label>In which countries would you like to work?</label>
            <select name="country" id="country" onChange={handleCountryChange}>
              <option value="germany">Germany</option>
              <option value="austria">Austria</option>
              <option value="switzerland">Switzerland</option>
              <option value="luxemburg">Luxemburg</option>
            </select>
            <button className={styles["add-more"]}>Add more</button>
          </div>
          <div className={styles["cities"]}>
            <label>In which cities would you like to work?</label>
            <select name="city" id="city" onChange={handleCityChange}>
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

        <button onClick={handleSubmit} className={styles["next-step"]}>
          Next step
        </button>
      </div>
    </div>
  );
}

export default QuizDesires;
