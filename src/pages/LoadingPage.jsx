import { useEffect } from "react";
import styles from "./LoadingPage.module.css";
import { Link, useNavigate } from "react-router-dom";


function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      navigate("/results/user");
    }, 6000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={styles["quiz-desires"]}>
     <Link to="/">
          <button className={styles["back-button"]}>Back to Homepage</button>
        </Link>
    <div className={styles["main"]}>
      <h1>Your results are almost there!</h1>
      <p>We are preparing your results right now...</p>
      
      <img className={styles["results-loading-image"]} src="../loading_bulbs.gif" />
      </div>
    </div>
  );
}

export default LoadingPage;
