import "./App.css";
('import Navbar from "./components/Navbar";');
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
('import Footer from "./components/Footer";');
import QuizDesires from "./pages/QuizDesires";
import QuizCurrentCareer from "./pages/QuizCurrentCareer";
import QuizPreviousCareer from "./pages/QuizPreviousCareer";
import QuizEducation from "./pages/QuizEducation";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import LoadingPage from "./pages/LoadingPage";
import ResultsPage from "./pages/ResultsPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import OverviewCareerDevelopment from "./pages/OverviewCareerDevelopment";
import OverviewSalary from "./pages/OverviewSalary";
import OverviewCountry from "./pages/OverviewCountry";
import OverviewEducation from "./pages/OverviewEducation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz1" element={<QuizDesires />} />
        <Route path="/quiz2/:quizinputId" element={<QuizCurrentCareer />} />
        <Route path="/quiz3/:quizinputId" element={<QuizPreviousCareer />} />
        <Route path="/quiz4/:quizinputId" element={<QuizEducation />} />
        <Route
          path="/signup/:quizinputId"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LogInPage />
            </IsAnon>
          }
        />
        <Route
          path="/loading"
          element={
            <IsPrivate>
              <LoadingPage />
            </IsPrivate>
          }
        />
        <Route
          path="/results/user"
          element={
            <IsPrivate>
              <ResultsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/results/user/overview1"
          element={
            <IsPrivate>
              <OverviewCareerDevelopment />
            </IsPrivate>
          }
        />
           <Route
          path="/overview2"
          element={
            <IsPrivate>
              <OverviewSalary />
            </IsPrivate>
          }
        />
             <Route
          path="/overview3"
          element={
            <IsPrivate>
              <OverviewCountry />
            </IsPrivate>
          }
        />
            <Route
          path="/overview4"
          element={
            <IsPrivate>
              <OverviewEducation />
            </IsPrivate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
