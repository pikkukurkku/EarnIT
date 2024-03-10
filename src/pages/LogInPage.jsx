import { useState, useEffect } from "react";
import styles from "./LogInPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import authService from "./../services/auth.service";


function LogInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    authService
      .login(requestBody)
      .then((response) => {
        console.log(response);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/loading");
        
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className={styles["quiz-desires"]}>
      <Link to="/">
        <button className={styles["back-button"]}>Back to Homepage</button>
      </Link>
      <div className={styles["main-content"]}>
        <img src="../stars.png" alt="stars" className={styles["picture"]}/>
        <div className={styles["content"]}>
          <h1 className={styles["header"]}>Log in to your profile</h1>
          <form onSubmit={handleLogInSubmit} className={styles["goals"]}>
            <div className={styles["left"]}>
              <label htmlFor="email" className={styles["job-title"]}>
                Email
              </label>
              <div className={styles["custom-input"]}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  autoComplete="off"
                  className={styles["text-unit"]}
                />
              </div>
              <label htmlFor="password" className={styles["job-title"]}>
                Password
              </label>
              <div className={styles["custom-input"]}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={handlePassword}
                  className={styles["text-unit"]}
                />
              </div>
              <button type="submit" className={styles["step"]}>
                Log in
              </button>
            </div>
          </form>
          {errorMessage && (
          <div className={styles["error-message"]}>{errorMessage}</div> )}
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
