import { useState } from "react";
import styles from "./LogInPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);



  const handleLogInSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        console.log("Response from backend =>", response);
        // navigate("/login");
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
        <button className={styles["back-button"]}>Back</button>
      </Link>
      <div className={styles["main-content"]}>
        <img src="./stars.png" alt="happy woman" />
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
                Sign up
              </button>
              <Link to={"/login"}><button>Log in</button></Link>
            </div>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
