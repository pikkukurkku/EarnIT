import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Subnavbar from "../components/Subnavbar";
import styles from "../pages/OverviewSalary.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function OverviewSalary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <Subnavbar />
      <div className={styles["main-overview"]} >
      <Link to="/overview3" >
      <img src="/salary-overview.png" alt="salary-overview-screenshot" className={styles["screenshot"]} />
      </Link>
    </div>
      <Footer />
    </div>
  );
}

export default OverviewSalary;
