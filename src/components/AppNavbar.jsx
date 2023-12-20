import { NavLink } from "react-router-dom";
import styles from "./AppNavbar.module.css";

export default function AppNavbar() {
  return (
    <div className={styles.appnav}>
      <ul>
        <li>
          <NavLink to={"cities"}>Cities</NavLink>
        </li>
        <li>
          <NavLink to={"countries"}>Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}
