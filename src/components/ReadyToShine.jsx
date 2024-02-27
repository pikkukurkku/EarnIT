import "./ReadyToShine.css";
import { Link } from "react-router-dom";

function ReadyToShine() {
  return (
    <div className="ReadyToShine">
     <h3>Ready to shine?</h3>
     <Link to="/quiz1">
     <button className="quizButton">Take the quiz</button>
     </Link>
     <p>Make your next big step in your career journey</p>
    </div>
  );
}

export default ReadyToShine;