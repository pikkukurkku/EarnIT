import "./App.css";
'import Navbar from "./components/Navbar";'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
'import Footer from "./components/Footer";'
import QuizDesires from "./pages/QuizDesires";
import QuizCurrentCareer from "./pages/QuizCurrentCareer";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz1" element={<QuizDesires />} />
        <Route path="/quiz2" element={<QuizCurrentCareer />} />
      </Routes>
    </>
  );
}

export default App;
