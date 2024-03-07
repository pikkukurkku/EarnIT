import styles from "./WhatDoClientsSay.module.css";

function WhatDoClientsSay() {
  return (
    <div className={styles["WhatDoClientsSay"]}>
      <h3 className={styles["what5"]}>What do clients say?</h3>
      <h4 className={styles["what-whyChooseUs"]}>Here are some reviews from our EarnIT community.</h4>
      <div className={styles["boxes"]}>
        <div className={styles["box"]}>
          <article className={styles["what-article"]}>
          “EarnIT changed my life. I know which career steps to take now and where I want to go.”
          </article>
          <div className={styles["pic-div"]}>
          <img src="./user1.png" alt="AI-pic1" className={styles["what-pic"]} />
          <p className={styles["short-intro"]}>Mike, Software Developer at Google</p>
          </div>
        </div>

        <div className={styles["box"]}>
        <article className={styles["what-article"]}>
          “I felt stuck in my career and didn’t know what I should do. EarnIT helped me find a new career path!”
          </article>
          <div className={styles["pic-div"]}>
          <img src="./user2.png" alt="AI-pic22" className={styles["what-pic"]}/>
          <p className={styles["short-intro"]}>Mara, UX/UI Designer at Delivery Hero</p>
          </div>
        </div>
        <div className={styles["box"]}>
        <article className={styles["what-article"]}>
          “I’m just here because EarnIT offered free Pizza. I really really love Pizza so I went for it.”
          </article>
          <div className={styles["pic-div"]}>
          <img src="./user3.png" alt="AI-pic3" className={styles["what-pic"]}/>
          <p className={styles["short-intro"]}>Henry, Product Manager at Amazon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDoClientsSay;
