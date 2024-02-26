import { useEffect } from "react";
import "./HomePage.css"

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="headerDiv">
      <h1 className="header">Make the best out of your career.</h1>
      <p>We will help with your personal and professional growth</p>
      <button className="quizButton">Take the quiz</button>
    </div>
  );
}
export default HomePage;
