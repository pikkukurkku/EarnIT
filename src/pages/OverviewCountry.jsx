import Footer from "../components/Footer";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Subnavbar from "../components/Subnavbar";
import styles from "../pages/OverviewCountry.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function OverviewCountry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <Subnavbar />
      <div className={styles["main-overview"]}>
        <Link to="/overview4">
          <img
            src="/country-overview.png"
            alt="country-overview-screenshot"
            className={styles["screenshot"]}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default OverviewCountry;
