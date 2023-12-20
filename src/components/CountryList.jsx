/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Welcome from "./Welcome";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Welcome />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
