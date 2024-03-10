import styles from "./Subnavbar.module.css";

function Subnavbar() {
        const handleBack = () => {
          window.history.back();
        };


    return (
        <div>
    <div className={styles["subnavbar"]}>
    <div to="/results/user" className={styles["subnavbar-link"]}>
        <button onClick={handleBack} className={styles["back-button-user"]}>Back</button>
      </div>
      <h1 className={styles["subnavbar-header"]}>Product Manager Overview</h1>
    </div>
    </div>
    )
}

export default Subnavbar;