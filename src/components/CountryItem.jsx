/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

const CountryListItem = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <img src={country.emoji} alt={country.country} className={styles.img} />
      <p className={styles.capital}>{country.country}</p>
    </li>
  );
};

export default CountryListItem;
