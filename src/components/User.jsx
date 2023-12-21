/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
const User = () => {
  return (
    <div className={styles.userBox}>
      <FontAwesomeIcon icon={faCircleUser} />
      <span>Vikram Pai V</span>
      <FontAwesomeIcon icon={faSignOut} />
    </div>
  );
};

export default User;
