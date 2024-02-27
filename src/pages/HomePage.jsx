import { useEffect } from "react";
import "./HomePage.css"
import WhyChooseUs from "../components/WhyChooseUs";
import WhatDoClientsSay from "../components/WhatDoClientsSay";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import ReadyToShine from "../components/ReadyToShine";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ProgressBar from "../components/ProgressBar";


function HomePage() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
    <div className="headerDiv">
    <div className="text">
      <h1 className="header">Make the best out of your career.</h1>
      <p>We will help with your personal and professional growth</p>
      <Link to="/quiz">
      <button className="quizButton">Take the quiz</button>
      </Link>
      </div>
      <div className="imageContainer">
      <img src="./earnIT.png" alt="earnIT" className="earnIT"/>
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
