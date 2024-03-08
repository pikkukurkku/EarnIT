import { useState, useEffect } from "react";
import styles from "./LoadingPage.module.css";
import { Link, useNavigate } from "react-router-dom";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      navigate("/results");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={styles["quiz-desires"]}>
      <h1>Your results are almost there!</h1>
      <p>We are preparing your results right now...</p>
      <img className={styles["quiz-desires"]} src="../loading1.png" />
    </div>
  );
}

export default LoadingPage;
