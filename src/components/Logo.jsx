import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img src="src\logo.png" alt="src\logo.png" className={styles.img} />
    </Link>
  );
}
