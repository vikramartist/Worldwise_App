/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

const CountryListItem = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <i className={`em em-flag-${country.emoji}`}></i>
      <p className={styles.capital}>{country.country}</p>
    </li>
  );
};

export default CountryListItem;
