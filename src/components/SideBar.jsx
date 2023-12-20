/* eslint-disable react/prop-types */
import styles from "./SideBar.module.css";
import AppNavbar from "./AppNavbar";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useCities } from "../contexts/CitiesContext";

function SideBar() {
  const { handleOpen } = useCities();

  return (
    <div className={styles.sidebar}>
      <span onClick={() => handleOpen((v) => !v)}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} color="white" />
      </span>
      <Link to={"/"}>
        <h1>Worldwise</h1>
      </Link>
      <AppNavbar />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
