import { useState } from "react";
import styles from "./QuizPreviousCareer.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const API_URL = "http://localhost:5005";



function QuizPreviousCareer(props) {
  const navigate = useNavigate();
  const { quizinputId } = useParams();
  const [previousJobTitle, setPreviousJobTitle] = useState("")
  const [workPeriod, setWorkPeriod] = useState({ from: "", to: "" });


  const handlePreviousJobTitleChange = (e) => {
    const selectedPreviousJobTitle = e.target.value;
    setPreviousJobTitle(selectedPreviousJobTitle);
  };

  const handleWorkPeriodChange = (type, value) => {
    setWorkPeriod((prevWorkPeriod) => ({
      ...prevWorkPeriod,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Handling submit...");
    e.preventDefault();
    const updatedData = { previousJobTitle, workPeriod };

  
    axios.put(`${API_URL}/api/quizinput/${quizinputId}/quiz3`, updatedData)
      .then((response) => {
        console.log("Response from backend =>", response.data); 
        navigate(`/quiz4/${quizinputId}`);
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
    }



  return (
    
    <div className={styles["quiz-desires"]}>
      
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
        <div className={styles["main-content"]}>
        <div className={styles["content"]}>

        
        <h1 className={styles["header"]}>Previous Job Situation</h1>

        <form onSubmit={handleSubmit} className={styles["goals"]}>
    <div className={styles["left"]}>
          <label className={styles["job-title"]}>Job Title</label>
          <div className={styles["custom-input"]}>
          <input onChange={handlePreviousJobTitleChange} value={previousJobTitle} type="text" className={styles["text-unit"]}
      />
      
      </div>
       <input
          type="text"
          id="goal4"
          name="goal4"
          value="Add more"
          readOnly
          className={styles["changeAnswer"]}
          style={{ backgroundColor: "#8ECAE6" }}/>
      </div>
      <div className={styles["right"]}>
          <label className={styles["work-period"]}>Work period</label><br/>
          <span>From:</span>
          <div className={styles["custom-input"]}>
          <input onChange={(e) => handleWorkPeriodChange("from", e.target.value)}   type="date" className={styles["text-unit"]}
      />
      </div>
      <span>To:</span>
      <div className={styles["custom-input"]}>
     
          <input onChange={(e) => handleWorkPeriodChange("to", e.target.value)}
        type="date" className={styles["text-unit"]} 
      />
     

      </div>
      <img src="../stars.png" alt="stars"/>
      </div>
        </form>
       
      </div>
      </div>
    
      <div className={styles["bottom-div"]}>
      <Link to={`/quiz2/${quizinputId}`}>
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
      <button onClick={handleSubmit} className={styles["step"]} >
          Next step
        </button>
        </div>
    </div>
  
   );
  }
  
  export default QuizPreviousCareer;
