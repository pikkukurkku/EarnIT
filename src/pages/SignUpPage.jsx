import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
      <div className={styles["quiz-desires"]}>
        <Link to="/">
          <button className={styles["back-button"]}>Back</button>
        </Link>
        <div className={styles["main-content"]}>
          <div className={styles["content"]}>
            <h1 className={styles["header"]}>Almost done! Just one thing...</h1>
            <h6>Please create an account to save your results:</h6>
            <form className={styles["goals"]}>
              <div className={styles["left"]}>
                <label className={styles["job-title"]}>Name</label>
                <div className={styles["custom-input"]}>
                  <input type="text" className={styles["text-unit"]} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUpPage;
