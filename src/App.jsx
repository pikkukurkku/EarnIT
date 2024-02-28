import "./App.css";
'import Navbar from "./components/Navbar";'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
'import Footer from "./components/Footer";'
import QuizDesires from "./pages/QuizDesires";
import QuizCurrentCareer from "./pages/QuizCurrentCareer";
import QuizPreviousCareer from "./pages/QuizPreviousCareer";
import QuizEducation from "./pages/QuizEducation";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz1" element={<QuizDesires />} />
        <Route path="/quiz2" element={<QuizCurrentCareer />} />
        <Route path="/quiz3" element={<QuizPreviousCareer />} />
        <Route path="/quiz4" element={<QuizEducation />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
