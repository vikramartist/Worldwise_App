/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities, useFormatDate } from "../contexts/CitiesContext";

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const formatedDate = useFormatDate(date, 1);

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <i className={`em em-flag-${emoji}`}></i>
        <h1 className={styles.title}>{cityName}</h1>
        <time className={styles.date}>({formatedDate})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
