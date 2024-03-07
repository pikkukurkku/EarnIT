import styles from "./ReadyToShine.module.css";
import { Link } from "react-router-dom";

function ReadyToShine() {
  return (
    <div className={styles["ReadyToShine"]}>
     <h3 className={styles["ReadyToShineHeader"]}>Ready to shine?</h3>
     <div className={styles["take-the-quiz"]}>
     <img src="../stars.png" className={styles["star-img"]}/>
     <Link to="/quiz1"className={styles["link-to-quiz1"]}>
     <button className={styles["quizButton"]}>Take the quiz</button>
     </Link>
     <img src="../stars.png" className={styles["star-img"]} />
     </div>
     <p className={styles["next-big-step"]}>Make your next big step in your career journey</p>
    </div>
  );
}

export default ReadyToShine;