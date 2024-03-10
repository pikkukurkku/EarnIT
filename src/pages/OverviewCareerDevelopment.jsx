import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Subnavbar from "../components/Subnavbar";
import styles from "../pages/OverviewCareerDevelopment.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function OverviewCareerDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <Subnavbar />
      <div className={styles["main-overview"]} >
      <Link to="/overview2" >
      <img src="/career_development.png" alt="career-development-screenshot" className={styles["screenshot"]} />
      </Link>
    </div>
      <Footer />
    </div>
  );
}

export default OverviewCareerDevelopment;
