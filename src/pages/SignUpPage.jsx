import { useState } from "react";
import styles from "./SignUpPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import authService from "./../services/auth.service";

const API_URL = "http://localhost:5005";

function SignUpPage() {
  const navigate = useNavigate();
  const { quizinputId } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    authService
      .signup(requestBody, quizinputId)
      .then((response) => {
        console.log(response);
        navigate("/login")
      })
      .catch((error) => {
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
        <img
          src="../login-woman.png"
          alt="happy woman"
          className={styles["picture"]}
        />
        <div className={styles["content"]}>
          <h1 className={styles["header"]}>Almost done! Just one thing...</h1>
          <p>Please create an account to save your results:</p>
          <form onSubmit={handleSignupSubmit} className={styles["goals"]}>
            <div className={styles["left"]}>
              <label htmlFor="name" className={styles["job-title"]}>
                Name
              </label>
              <div className={styles["custom-input"]}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleName}
                  className={styles["text-unit"]}
                />
              </div>
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
              <p className={styles["already-have"]}>
                Already have an account?
                <Link to="/login"> Log in here</Link>
              </p>
              {errorMessage && (
          <div className={styles["error-message"]}>{errorMessage}</div>
        )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
