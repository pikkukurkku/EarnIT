import { useState, useEffect } from "react";
import styles from "./QuizCurrentCareer.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// const API_URL = "http://localhost:5005";
const API_URL = "https://earnit-server.onrender.com"



function QuizCurrentCareer(props) {
  const navigate = useNavigate();
  const { quizinputId } = useParams();
  const [jobTitle, setJobTitle] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [years, setYears] = useState("");
  const [salary, setSalary] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleCurrentJobTitleChange = (e) => {
    const selectedJobTitle = e.target.value;
    setJobTitle(selectedJobTitle);
  };

  const handleSalaryChange = (e) => {
    const newSalary = e.target.value;
    setSalary(newSalary);
  };

  const handleStatusChange = (value) => {
    setEmploymentStatus(value);
  };

  const handleYearsChange = (e) => {
    const value = e.target.value;
    setYears(prevState => value);
  };

  const handleResponsibilitiesChange = (e) => {
    const selectedResponsibility = e.target.value;
    if (responsibilities.includes(selectedResponsibility)) {
      setResponsibilities(responsibilities.filter((responsibility) => responsibility !== selectedResponsibility));
    } else {
      setResponsibilities([...responsibilities, selectedResponsibility]);
    }
  };



  const handleSubmit = (e) => {
    console.log("Handling submit...");
    e.preventDefault();
    const updatedData = { jobTitle, employmentStatus, years, salary, responsibilities };

  
    console.log("Updated Data:", updatedData);

    axios.put(`${API_URL}/api/quizinput/${quizinputId}/quiz2`, updatedData)
      .then((response) => {
        console.log("Response from backend =>", response.data); 
   
        navigate(`/quiz3/${quizinputId}`);
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
    }

  return (
    
    <div className={styles["quiz-desires"]}>
      
        <Link to="/">
          <button className={styles["back-button"]}>Back to Homepage</button>
        </Link>
        <div className={styles["main-content"]}>
        <div className={styles["content"]}>
        <h1 className={styles["header"]}>Current Job Situation</h1>

        <form onSubmit={handleSubmit} className={styles["goals"]}>
          <label>What is your current job title?</label>
          <select name="currentJobTitle" id="currentJobTitle" onChange={handleCurrentJobTitleChange} >
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
          <select name="years" id="years" onChange={handleYearsChange} className={styles["select"]} >
            <option value="0"></option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">>5</option>
            <option value="6">>10</option>
          </select>
            <div className={styles["separator"]} />
            <span className={styles["time-unit"]}>{years === "1" ? "year" : "years"}</span>
          </div>

          <label>What is your current salary per year? (without extra bonuses)</label>
          <div className={styles["custom-input"]}>
          <input type="text" className={styles["text-unit"]}
        value={salary}
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
            onClick={handleResponsibilitiesChange}
            className={styles["answer2"]}
            style={{
              backgroundColor: responsibilities.includes("Leadership Role")
                ? "#023047"
                : "lightblue",
              color: responsibilities.includes("Leadership Role")
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
            onClick={handleResponsibilitiesChange}
            className={styles["answer2"]}
            style={{
              backgroundColor: responsibilities.includes("Stakeholder Communication")
                ? "#023047"
                : "lightblue",
              color: responsibilities.includes("Stakeholder Communication")
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
            onClick={handleResponsibilitiesChange}
            className={styles["answer2"]}
            style={{
              backgroundColor: responsibilities.includes("Mentorship")
                ? "#023047"
                : "lightblue",
              color: responsibilities.includes("Mentorship")
                ? "white"
                : "#023047",
            }}
          />
        </div>
        </form>
      </div>
      <div className={styles["right-side"]}>
        <img src="../current-career-man.png" alt="career-man" className={styles["picture"]} />

      </div>
      </div>
    
      <div className={styles["bottom-div"]}>
      <Link to="/quiz1" className={styles["link"]}>
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
      <button onClick={handleSubmit} className={styles["step"]}>
          Next step
        </button>
        </div>
    </div>
  
   );
  }

  
  export default QuizCurrentCareer;


  // <button className={styles["step"]} disabled={!employmentStatus}> update later