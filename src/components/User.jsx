/* eslint-disable no-unused-vars */
import styles from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/FakeAuthContext.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useAuth();
  const { open } = useCities();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }
  return (
    <div
      className={`${styles.userBox} ${
        open ? styles.userBox_open : styles.userBox_close
      }`}
    >
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: "30px", height: "30px" }}
      />
      <h6>Welcome, {user.name.split(" ")[0]}</h6>
      <span onClick={(e) => handleClick(e)} className={styles.button}>
        <FontAwesomeIcon icon={faSignOut} />
      </span>
    </div>
  );
};

export default User;
