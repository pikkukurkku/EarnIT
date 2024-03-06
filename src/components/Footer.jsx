import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer"]}>
    <div className={styles["footer-boxes"]}>
    <div className={styles["footer-box"]}>
      <h4>EarnIT</h4>
      <p>About us</p>
      <p>Press</p>
      <p>Become a Partner</p>
      </div>
      <div className={styles["footer-box"]}>
      <h4>Guides</h4>
      <p>Skill Improvement</p>
      <p>Work-Life Balance</p> 
      <p>Salary Negotiations</p>
      </div>
      <div className={styles["footer-box"]}>
      <h4>Networking</h4>
      <p>Find a mentor</p>
      <p>Be a mentor</p>
      <p>Find events</p>
      </div>
      <div className={styles["footer-box"]}>
      <h4>Events</h4>
      <p>Workshops</p>
      <p>Meetups</p>
      <p>Fairs</p>
      </div>
      <div className={styles["get-connected"]}>
      <h4>Get Connected</h4>
      <img src='./insta.png' className={styles["footer-img"]}/>
      <img src='./fb.png' className={styles["footer-img"]}/>
      </div>
      </div>
      <span>Privacy policy - Terms of use - Contact Us - GENERAL TERMS AND CONDITIONS - Legal notice - Sitemap</span>
    </div>
  );
}

export default Footer;