import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>
        <p>Why choose us?</p>
        <p>What do clients say?</p>
        <p>FAQ</p>
    </nav>
  );
}

export default Navbar;