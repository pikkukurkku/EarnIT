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
import LogInPage from "./pages/LogInPage";
import LoadingPage from "./pages/LoadingPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz1" element={<QuizDesires />} />
        <Route path="/quiz2/:quizinputId" element={<QuizCurrentCareer />} />
        <Route path="/quiz3/:quizinputId" element={<QuizPreviousCareer />} />
        <Route path="/quiz4/:quizinputId" element={<QuizEducation />} />
        <Route path="/signup/:quizinputId" element={<SignUpPage />} />
        <Route path="/login/:quizinputId" element={<LogInPage />} />
        <Route path="/loading/:quizinputId" element={<LoadingPage />} />
        <Route path="/results/:quizinputId" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
