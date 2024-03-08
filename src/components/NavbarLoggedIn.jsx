import { Link } from "react-router-dom";
import styles from "./NavbarLoggedIn.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className={styles["navbar"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>

        <p>Graph</p>
        <p>Guides</p>
        <p>Networking</p>
        <p>Events</p>

        {isLoggedIn ? (
  <>
        <button onClick={logOutUser} className={styles["logout-btn"]}>Logout</button>
          <span className={styles["hey"]}>Hey, {user && user.name}!</span>
        <img src="./Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}  />
        </>
          ) : null}
    </nav>
  );
}

export default Navbar;