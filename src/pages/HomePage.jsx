import { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import styles from "./HomePage.module.css"
import WhyChooseUs from "../components/WhyChooseUs";
import WhatDoClientsSay from "../components/WhatDoClientsSay";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import ReadyToShine from "../components/ReadyToShine";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Footer from "../components/Footer";
// import ProgressBar from "../components/ProgressBar";


function HomePage() {


  const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
        {isLoggedIn ? ( 
        <NavbarLoggedIn />
      ) : (
        <Navbar /> 
      )}
    <div className={styles["headerDiv"]}>
    <div className={styles["text"]}>
      <h1 className={styles["header"]}>Make the best out of your career.</h1>
      <p className={styles["wewillhelp"]}>We will help with your personal and professional growth</p>
      <Link to="/quiz1">
      <button className={styles["quizButton"]}>Take the quiz</button>
      </Link>
      </div>
      <div className={styles["imageContainer"]}>
      <img src="./earnIT.png" alt="earnIT" className={styles["earnIT"]}/>
      </div>
    </div>
    <WhyChooseUs />
    <WhatDoClientsSay />
    <QuestionsAndAnswers />
    <ReadyToShine />
    {/* <ProgressBar /> */}
    <Footer />
    </>
  );
}
export default HomePage;
