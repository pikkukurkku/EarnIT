import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import styles from "./Results.module.css";
import { useEffect } from "react";

function ResultsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <div className={styles["your-results"]} >
      <h1 className={styles["ready"]}>Your results are ready!</h1>
      <p className={styles["wewillhelp"]}>Here are your personal recommendations:</p>
      </div>
      <div className={styles["WhyChooseUs"]}>
      <h1 className={styles["header-whyChooseUs"]}>Improve your current career:</h1>
      <div className={styles["boxes"]}>
        <div className={styles["box"]}>
          <h5 className={styles["whyh5"]}>Product Manager</h5>
        </div>
      </div>
      <img src="../stars.png" alt="stars" className={styles["image-stars"]}/>
      <img src="../arrow.png" alt="arrow" className={styles["image-arrow"]}/>
    </div>

    <div className={styles["WhatDoClientsSay"]}>
      <h3 className={styles["what5"]}>Check out other careers that could be interesting</h3>
 
      <div className={styles["boxes"]}>
        <div className={styles["box"]}>
          <article className={styles["what-article"]}>
          UX/UI Researcher
          </article>
        </div>

        <div className={styles["box"]}>
        <article className={styles["what-article"]}>
        Marketing Manager
          </article>
        </div>

        <div className={styles["box"]}>
        <article className={styles["what-article"]}>
        Data Scientist
          </article>
          
        </div>
      </div>
    </div>




      <Footer />
    </div>
  );
}

export default ResultsPage;
