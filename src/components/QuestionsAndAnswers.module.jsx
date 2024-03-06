import styles from "./QuestionsAndAnswers.module.css";

function QuestionsAndAnswers() {
  return (
    <div className={styles["QuestionsAndAnswers"]}>
      <h3>Questions and answers</h3>
      <h4>
        Our users often have similar questions, so we answered some of them.
      </h4>
      <div className={styles["questions"]}>
        <p>What happens next after I take the quiz?</p>
        <p>Do I need to pay for your services?</p>
        <p>What about my personal information?</p>
        <p>
          What if I am a complete dissapointment and even you can’t help me?
        </p>
        <p>How much time does it usually take to achieve a career goal?</p>
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
