import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to={"/register"} className={styles.ctaLink}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}