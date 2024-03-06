import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <div className={styles["WhyChooseUs"]}>
      <h1 className={styles["header-whyChooseUs"]}>Why choose us?</h1>
      <h2 className={styles["short-intro"]} >A short introduction of how we work and what we do</h2>
      <div className={styles["boxes"]}>
        <div className={styles["box"]}>
          <h5 className={styles["whyh5"]}>What is EarnIT?</h5>
          <article className={styles["why-article"]}>
            We're here to help you advance in your career step by step. Our
            platform provides personalized guidance and recommendations based on
            your career profile and goals.
          </article>
        </div>

        <div className={styles["box"]}>
          <h5 className={styles["whyh5"]}>How does it work?</h5>
          <article className={styles["why-article"]}>
            It's simple. We start by getting to know you through a friendly
            quiz. This helps us understand your unique situation and create a
            customized career plan just for you.
          </article>
        </div>
        <div className={styles["box"]}>
          <h5 className={styles["whyh5"]}>What’s the quiz about?</h5>
          <article className={styles["why-article"]}>
          We ask about your background, education, skills, goals, and the challenges you've faced in your career. It's all about understanding your journey so we can support you effectively.
          </article>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
