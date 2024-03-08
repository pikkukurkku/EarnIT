import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
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

        {isLoggedIn ? (
  <>
      
          <span className={styles["hey"]}>Hey, {user && user.name}!</span>
          <Link to="/results">
        <img src="./Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}  />
        </Link>
        <button onClick={logOutUser} className={styles["logout-btn"]}>Logout</button>
        </>
          ) : (
        <Link to="/login">
        <img src="../Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}/>
        </Link>
          )}
       
    </nav>
  );
}

export default Navbar;