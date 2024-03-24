import { Link, useNavigate } from "react-router-dom";
import styles from "./NavbarLoggedIn.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import authService from "./../services/auth.service";

function NavbarLoggedIn() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 
  const navigate = useNavigate();


  const deleteUser = () => {
    console.log("Deleting user");
      authService
      .deleteUser(user._id) 
      .then(() => {
        logOutUser();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error deleting user:", error);
      });
  };


  return (
    <nav className={styles["navbar"]}>
      <Link to="/" className={styles["logo"]}>
        <span>EarnIT</span>
      </Link>

        <p className={styles["paragraph"]}>Graph</p>
        <p className={styles["paragraph"]}>Guides</p>
        <p className={styles["paragraph"]}>Networking</p>
        <p className={styles["paragraph"]}>Events</p>

        {isLoggedIn ? (
  <>
  <div className={styles["buttons"]}>
        <button onClick={logOutUser} className={styles["logout-btn"]}>Log out</button>
        <button onClick={deleteUser} className={styles["logout-btn"]}>Delete my profile</button>
        </div>
          <span className={styles["hey"]}>Hey, {user && user.name}!</span>
          <Link className={styles["link"]} to="/results/user">
        <img src="/Profile Icon.png" alt="profile icon" className={styles["profile-icon"]}  />
        </Link>
        </>
          ) : null}
    </nav>
  );
}

export default NavbarLoggedIn;