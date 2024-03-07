import styles from "./QuestionsAndAnswers.module.css";

function QuestionsAndAnswers() {
  return (
    <div className={styles["QuestionsAndAnswers"]}>
      <h3 className={styles["header-QA"]}>Questions and answers</h3>
      <h4 className={styles["short-intro2"]}>
        Our users often have similar questions, so we answered some of them.
      </h4>
      <div className={styles["questions"]}>
        <p className={styles["question-paragraph"]}>What happens next after I take the quiz?<img src="./arrow-down-icon.png" className={styles["arrow"]}/></p>
        <p className={styles["question-paragraph"]}>Do I need to pay for your services?<img src="./arrow-down-icon.png" className={styles["arrow"]}/></p>
        <p className={styles["question-paragraph"]}>What about my personal information?<img src="./arrow-down-icon.png" className={styles["arrow"]}/></p>
        <p className={styles["question-paragraph"]}>
          What if I am a complete dissapointment and even you can’t help me?
          <img src="./arrow-down-icon.png" className={styles["arrow"]}/></p>
        <p className={styles["question-paragraph"]}>How much time does it usually take to achieve a career goal?<img src="./arrow-down-icon.png" className={styles["arrow"]}/></p>
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
