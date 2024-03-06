import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
    <div className={styles["navbar-main"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>
        <p>Why choose us?</p>
        <p>What do clients say?</p>
        <p>FAQ</p>
        </div>
        <img src="../Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}/>
    </nav>
  );
}

export default Navbar;