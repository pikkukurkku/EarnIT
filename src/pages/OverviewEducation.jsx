import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Subnavbar from "../components/Subnavbar";
import styles from "../pages/OverviewEducation.module.css"
import { useEffect } from "react";

function OverviewEducation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <Subnavbar />
      <div className={styles["main-overview"]} >
      <img src="/education-overview.png" alt="education-overview-screenshot" className={styles["screenshot"]} />
    </div>
      <Footer />
    </div>
  );
}

export default OverviewEducation;
