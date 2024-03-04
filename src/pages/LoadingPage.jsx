import { useState, useEffect } from "react";
import styles from "./LoadingPage.module.css";
import { Link, useNavigate } from "react-router-dom";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/results/:quizinputId");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={styles["quiz-desires"]}>
      <h1>Your results are almost there!</h1>
      <p>We are preparing your results right now...</p>
      <img src="../loading1.png" />
    </div>
  );
}

export default LoadingPage;
