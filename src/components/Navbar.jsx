import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log("Logged-in User:", user);
  const userId = user && user._id; 


  return (
    <nav className={styles["navbar"]}>
    <div className={styles["navbar-main"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>
        <p className={styles["paragraph"]}>Why choose us?</p>
        <p className={styles["paragraph"]}>What do clients say?</p>
        <p className={styles["paragraph"]}>FAQ</p>
        </div>

        {isLoggedIn ? (
  <>
          <span className={styles["hey"]}>Hey, {user && user.name}!</span>
          <Link to="/results/user" >
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