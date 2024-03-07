import { Link } from "react-router-dom";
import styles from "./NavbarLoggedIn.module.css";

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>
        <p>Graph</p>
        <p>Guides</p>
        <p>Networking</p>
        <p>Events</p>
        <img src="./Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}  />
    </nav>
  );
}

export default Navbar;