import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useEffect } from "react";

function ResultsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
  <NavbarLoggedIn/>;
  <h1>Your results are ready!</h1>
  <p>Here are your personal recommendations:</p>
  <section>
    <h2>Improve your current career:</h2>
    <div>Product manager</div>
  </section>
  <section>
    <h2>Check out other careers than could be interesting:</h2>
    <div>UX/UI Researcher</div>
    <div>Marketing Manager</div>
    <div>Data Scientist</div>
  </section>
  <Footer />
  </div>
  )
}

export default ResultsPage;
