import React, { useState } from "react";
import styles from "./QuizPreviousCareer.module.css";
import { Link } from "react-router-dom";

function QuizPreviousCareer() {


  return (
    
    <div className={styles["quiz-desires"]}>
      
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
        <div className={styles["main-content"]}>
        <div className={styles["content"]}>
        <h1 className={styles["header"]}>Previous Job Situation</h1>

        <form className={styles["goals"]}>
    <div className={styles["left"]}>
          <label className={styles["job-title"]}>Job Title</label>
          <div className={styles["custom-input"]}>
          <input type="text" className={styles["text-unit"]}
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
          <input type="date" className={styles["text-unit"]}
      />
      </div>
      <span>To:</span>
      <div className={styles["custom-input"]}>
     
          <input type="date" className={styles["text-unit"]} 
      />
     

      </div>
      <img src="./stars.png"/>
      </div>
        </form>
       
      </div>
      </div>
    
      <div className={styles["bottom-div"]}>
      <Link to="/quiz2">
      <button className={styles["step"]}>
          Previous step
        </button>
        </Link>
      <button className={styles["step"]} >
          Next step
        </button>
        </div>
    </div>
  
   );
  }
  
  export default QuizPreviousCareer;
